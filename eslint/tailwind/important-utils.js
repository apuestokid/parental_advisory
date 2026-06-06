const tailwindClassTokenPattern = /[^\s]+/g
const tailwindArbitraryValuePattern = /\[[^\]]+\]/

const hasLeadingImportant = classToken => classToken.startsWith('!') || classToken.includes(':!')

const extractLegacyImportantClasses = classString => {
  if (typeof classString !== 'string') return []

  const classTokens = classString.match(tailwindClassTokenPattern) || []
  return classTokens.filter(hasLeadingImportant)
}

const extractClassTokens = classString => {
  if (typeof classString !== 'string') return []
  return classString.match(tailwindClassTokenPattern) || []
}

const isArbitraryValueClass = classToken => tailwindArbitraryValuePattern.test(classToken)

const extractArbitraryValueClasses = classString =>
  extractClassTokens(classString).filter(isArbitraryValueClass)

const getArbitraryValueContent = classToken => {
  const startIndex = classToken.indexOf('[')
  const endIndex = classToken.lastIndexOf(']')

  if (startIndex === -1 || endIndex <= startIndex) return ''
  return classToken.slice(startIndex + 1, endIndex)
}

const getArbitraryValueIssues = classToken => {
  const arbitraryValue = getArbitraryValueContent(classToken)
  if (!arbitraryValue) return []

  const issues = []
  if (arbitraryValue.trim() !== arbitraryValue) issues.push('extra-edge-whitespace')
  if (/\s{2,}/.test(arbitraryValue)) issues.push('repeated-inner-whitespace')
  if (/['"]/.test(arbitraryValue)) issues.push('quoted-value')

  return issues
}

export {
  tailwindClassTokenPattern,
  hasLeadingImportant,
  extractLegacyImportantClasses,
  extractClassTokens,
  extractArbitraryValueClasses,
  getArbitraryValueIssues,
}
