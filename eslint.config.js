import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import defaultIgnores from './eslint/config/ignores.js'
import sharedRules from './eslint/config/rules.js'
import defaultLanguageOptions from './eslint/config/language-options.js'
import localTailwindPlugin from './eslint/plugins/local-tailwind-plugin.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    ignores: defaultIgnores,
  },

  // Base JS recommended configuration
  js.configs.recommended,

  // Vue recommended configuration
  ...pluginVue.configs['flat/recommended'],

  // Prettier integration
  {
    plugins: {
      prettier: prettierPlugin,
      localTailwind: localTailwindPlugin,
    },
    rules: {
      ...sharedRules,
    },
  },

  // Per-file overrides can go here if needed
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: defaultLanguageOptions,
  },

  // Disable all rules that conflict with Prettier
  eslintConfigPrettier,
]
