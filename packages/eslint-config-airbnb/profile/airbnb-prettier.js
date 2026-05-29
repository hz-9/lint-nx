module.exports = {
  extends: [
    '../airbnb-base-rules/best-practices',
    '../airbnb-base-rules/errors',
    '../airbnb-base-rules/es6',
    '../airbnb-base-rules/imports',
    '../airbnb-base-rules/node',
    '../airbnb-base-rules/strict',
    '../airbnb-base-rules/style',
    '../airbnb-base-rules/variables',

    '../prettier-rules/index',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {},
}
