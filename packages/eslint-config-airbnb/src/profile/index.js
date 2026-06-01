module.exports = {
  plugins: ['import'],

  env: {
    es6: true,
    node: true,
  },

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

    '../rules/best-practices',
    '../rules/errors',
    '../rules/es6',
    '../rules/imports',
    '../rules/node',
    '../rules/strict',
    '../rules/style',
    '../rules/variables',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {},
}
