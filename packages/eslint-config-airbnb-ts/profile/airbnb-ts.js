const { rules: tsOffRules } = require('../airbnb-ts-rules/ts-off')

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',

  extends: [
    '../airbnb-ts-rules/best-practices',
    '../airbnb-ts-rules/errors',
    '../airbnb-ts-rules/es6',
    '../airbnb-ts-rules/imports',
    '../airbnb-ts-rules/node',
    '../airbnb-ts-rules/strict',
    '../airbnb-ts-rules/style',
    '../airbnb-ts-rules/variables',
  ].map(require.resolve),

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: tsOffRules,
    },
  ],
}
