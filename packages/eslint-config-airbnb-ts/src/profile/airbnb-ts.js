const { TS_FILES_GLOB } = require('./constants')

module.exports = {
  plugins: ['import'],

  env: {
    es6: true,
    node: true,
  },

  extends: ['@hz-9/eslint-config-airbnb/airbnb-base'].map(require.resolve),

  overrides: [
    {
      files: TS_FILES_GLOB,

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

        '../airbnb-ts-rules/ts-off',
      ].map(require.resolve),
    },
  ],
}
