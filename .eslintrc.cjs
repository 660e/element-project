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
    // https://eslint.org/docs/v8.x/rules/
    'no-var': 'error',
    'prefer-const': 'error',

    // https://eslint.vuejs.org/rules/
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // is, v-is
          'LIST_RENDERING', // v-for
          'CONDITIONALS', // v-if, v-else-if, v-else, v-show, v-cloak
          'TWO_WAY_BINDING', // v-model
          'RENDER_MODIFIERS', // v-once, v-pre
          'CONTENT', // v-text, v-html
          'SLOT', // slot, v-slot
          'OTHER_DIRECTIVES', // v-custom-directive
          'ATTR_DYNAMIC', // v-bind:prop, :prop
          'EVENTS', // @click, v-on
          'ATTR_STATIC', // prop, custom-prop
          'GLOBAL', // id
          'UNIQUE', // ref, key
          'ATTR_SHORTHAND_BOOL', // boolean-prop
        ],
        alphabetical: true,
      },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': ['error', { html: { normal: 'never', void: 'always' } }],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-static-inline-styles': ['error'],
    'vue/singleline-html-element-content-newline': 'off',

    // https://typescript-eslint.io/rules/
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
  },
};
