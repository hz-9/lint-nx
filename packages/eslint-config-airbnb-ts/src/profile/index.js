// const { rules: tsOffRules } = require('../airbnb-ts-rules/ts-off')

// module.exports = {
//   plugins: ['@typescript-eslint', 'import'],
//   parser: '@typescript-eslint/parser',

//   env: {
//     es6: true,
//     node: true,
//   },

//   extends: [
//     '../airbnb-ts-rules/best-practices',
//     '../airbnb-ts-rules/errors',
//     '../airbnb-ts-rules/es6',
//     '../airbnb-ts-rules/imports',
//     '../airbnb-ts-rules/node',
//     '../airbnb-ts-rules/strict',
//     '../airbnb-ts-rules/style',
//     '../airbnb-ts-rules/variables',

//     '../prettier-rules/index',

//     '../rules/best-practices',
//     '../rules/errors',
//     '../rules/es6',
//     '../rules/imports',
//     '../rules/node',
//     '../rules/strict',
//     '../rules/style',
//     '../rules/variables',
//   ].map(require.resolve),

//   overrides: [
//     {
//       files: ['*.ts', '*.tsx'],
//       rules: tsOffRules,
//     },
//   ],
// }

const { TS_FILES_GLOB } = require('./constants')

module.exports = {
  plugins: ['import'],

  env: {
    es6: true,
    node: true,
  },

  extends: ['@hz-9/eslint-config-airbnb/index'].map(require.resolve),

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
    },
  ],
}
