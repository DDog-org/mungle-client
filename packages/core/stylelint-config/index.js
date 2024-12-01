module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
  customSyntax: '@stylelint/postcss-css-in-js',
};
