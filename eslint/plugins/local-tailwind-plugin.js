import {
  extractArbitraryValueClasses,
  extractLegacyImportantClasses,
  getArbitraryValueIssues,
} from '../tailwind/important-utils.js'

const reportLegacyImportantClasses = (context, node, classString) => {
  const legacyClasses = extractLegacyImportantClasses(classString)

  legacyClasses.forEach(classToken => {
    context.report({
      node,
      message: `Tailwind v4: evita "${classToken}". Usa "!" al final de la utilidad (por ejemplo, "bg-module!" o "hover:bg-module!").`,
    })
  })
}

const reportArbitraryValueConsistency = (context, node, classString) => {
  const arbitraryClasses = extractArbitraryValueClasses(classString)

  arbitraryClasses.forEach(classToken => {
    const issues = getArbitraryValueIssues(classToken)
    if (issues.length === 0) return

    context.report({
      node,
      message: `Tailwind: la clase "${classToken}" tiene un valor arbitrario inconsistente. Evita espacios sobrantes/repetidos y comillas dentro de [...].`,
    })
  })
}

const hasDisallowedDynamicClassPattern = expression => {
  if (!expression || typeof expression !== 'object') return false

  switch (expression.type) {
    case 'TemplateLiteral':
      return expression.expressions.length > 0
    case 'BinaryExpression':
      return expression.operator === '+' || hasDisallowedDynamicClassPattern(expression.left)
    case 'LogicalExpression':
      return (
        hasDisallowedDynamicClassPattern(expression.left) ||
        hasDisallowedDynamicClassPattern(expression.right)
      )
    case 'ConditionalExpression':
      return (
        hasDisallowedDynamicClassPattern(expression.test) ||
        hasDisallowedDynamicClassPattern(expression.consequent) ||
        hasDisallowedDynamicClassPattern(expression.alternate)
      )
    case 'ArrayExpression':
      return expression.elements.some(element => hasDisallowedDynamicClassPattern(element))
    case 'ObjectExpression':
      return expression.properties.some(property => {
        if (property.type !== 'Property') return false
        const hasComputedKeyIssue =
          property.computed && hasDisallowedDynamicClassPattern(property.key)
        return hasComputedKeyIssue || hasDisallowedDynamicClassPattern(property.value)
      })
    case 'CallExpression': {
      if (expression.callee?.type === 'MemberExpression') {
        const methodName = expression.callee.property?.name
        if (methodName === 'concat' || methodName === 'join') return true
      }
      return (
        hasDisallowedDynamicClassPattern(expression.callee) ||
        expression.arguments.some(argument => hasDisallowedDynamicClassPattern(argument))
      )
    }
    case 'MemberExpression':
      return (
        hasDisallowedDynamicClassPattern(expression.object) ||
        (expression.computed && hasDisallowedDynamicClassPattern(expression.property))
      )
    case 'ChainExpression':
      return hasDisallowedDynamicClassPattern(expression.expression)
    case 'UnaryExpression':
      return hasDisallowedDynamicClassPattern(expression.argument)
    case 'SequenceExpression':
      return expression.expressions.some(child => hasDisallowedDynamicClassPattern(child))
    default:
      return false
  }
}

const reportIfUnstructuredDynamicClass = (context, node, expression) => {
  if (!expression) return

  if (!hasDisallowedDynamicClassPattern(expression)) return

  context.report({
    node,
    message:
      'Tailwind: evita nombres de clase dinámicos en :class (por ejemplo, `bg-${danger}`). Usa mapeos estáticos de clases completas, como recomienda la documentación oficial.',
  })
}

const getAttributeName = node => {
  const rawName = node?.key?.name
  if (typeof rawName === 'string') return rawName
  return rawName?.name
}

const isStaticClassAttribute = node => !node?.directive && getAttributeName(node) === 'class'

const isBindClassAttribute = node => {
  if (!node?.directive) return false
  const directiveName = getAttributeName(node)
  const argumentName = node?.key?.argument?.name
  return directiveName === 'bind' && argumentName === 'class'
}

const createTemplateVisitor = (context, templateVisitor) => {
  const parserServices = context.sourceCode?.parserServices
  if (parserServices?.defineTemplateBodyVisitor) {
    return parserServices.defineTemplateBodyVisitor(templateVisitor)
  }

  return {}
}

const localTailwindPlugin = {
  rules: {
    'no-leading-important-utility': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Disallow Tailwind important modifier at the beginning of utilities',
        },
        schema: [],
      },
      create(context) {
        return createTemplateVisitor(context, {
          VAttribute(node) {
            if (isStaticClassAttribute(node)) {
              reportLegacyImportantClasses(context, node, node.value?.value)
              return
            }

            if (!isBindClassAttribute(node)) return

            const expression = node.value?.expression
            if (!expression) return

            if (expression.type === 'Literal') {
              reportLegacyImportantClasses(context, node, expression.value)
              return
            }

            if (expression.type === 'TemplateLiteral') {
              expression.quasis.forEach(quasi => {
                reportLegacyImportantClasses(context, node, quasi.value?.cooked)
              })
            }
          },
        })
      },
    },
    'no-unstructured-tailwind-dynamic-class': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Disallow unstructured dynamic class generation in :class bindings',
        },
        schema: [],
      },
      create(context) {
        return createTemplateVisitor(context, {
          VAttribute(node) {
            if (!isBindClassAttribute(node)) return
            const expression = node.value?.expression
            reportIfUnstructuredDynamicClass(context, node, expression)
          },
        })
      },
    },
    'enforce-arbitrary-value-consistency': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Enforce consistency inside Tailwind arbitrary values',
        },
        schema: [],
      },
      create(context) {
        return createTemplateVisitor(context, {
          VAttribute(node) {
            if (isStaticClassAttribute(node)) {
              reportArbitraryValueConsistency(context, node, node.value?.value)
              return
            }

            if (!isBindClassAttribute(node)) return

            const expression = node.value?.expression
            if (!expression) return

            if (expression.type === 'Literal') {
              reportArbitraryValueConsistency(context, node, expression.value)
              return
            }

            if (expression.type === 'TemplateLiteral') {
              expression.quasis.forEach(quasi => {
                reportArbitraryValueConsistency(context, node, quasi.value?.cooked)
              })
            }
          },
        })
      },
    },
  },
}

export default localTailwindPlugin
