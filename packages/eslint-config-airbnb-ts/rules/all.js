/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 22:05:50
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-14 16:36:00
 */

const { rules: hz9AirbnbImportsRules } = require('@hz-9/eslint-config-airbnb/rules/imports')
const { rules: hz9AirbnbStyleRules } = require('@hz-9/eslint-config-airbnb/rules/style')

module.exports = {
  rules: {
    'import/prefer-default-export': hz9AirbnbImportsRules['import/prefer-default-export'],

    'max-len': hz9AirbnbStyleRules['max-len'],

    // require or disallow use of semicolons instead of ASI
    // 此规则强制使用分号。
    semi: 'off',
    '@typescript-eslint/semi': hz9AirbnbStyleRules.semi,
    '@typescript-eslint/indent': 'off',

    // require trailing commas in multiline object literals
    // 此规则强制在对象和数组文字中一致地使用尾随逗号。
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/quotes': 'off',

    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
      },
    ],

    '@typescript-eslint/parameter-properties': [
      'warn',
      {
        allow: ['public', 'public readonly', 'protected', 'protected readonly', 'private', 'private readonly'],
      },
    ],
  },
}
