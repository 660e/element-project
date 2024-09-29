/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['@vue/eslint-config-typescript', 'plugin:prettier/recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',

    'vue/multi-word-component-names': 'off',
  },
};
