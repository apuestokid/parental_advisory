const sharedRules = {
  'prettier/prettier': 'error',
  'no-console': 'warn',
  'no-debugger': 'warn',
  'vue/multi-word-component-names': 'off',
  'localTailwind/no-leading-important-utility': 'warn',
  'localTailwind/no-unstructured-tailwind-dynamic-class': 'warn',
  'localTailwind/enforce-arbitrary-value-consistency': 'warn',
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
}

export default sharedRules
