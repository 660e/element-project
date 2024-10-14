/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['@vue/eslint-config-typescript', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',

    // https://eslint.org/docs/v8.x/rules/
    'no-var': 'error',
    'prefer-const': 'error',

    // https://eslint.vuejs.org/rules/
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': ['error', { html: { normal: 'never', void: 'always' } }],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
