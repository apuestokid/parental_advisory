import globals from 'globals'

const defaultLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.browser,
    ...globals.node,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}

export default defaultLanguageOptions
