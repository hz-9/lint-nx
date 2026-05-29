/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 17:47:28
 * @Description  : 继承 eslint-config-airbnb-base/rules/es6.js 并重写。
 */

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/es6'].map(require.resolve),
  rules: {
    // https://eslint.org/docs/rules/arrow-parens
    // require parens in arrow function arguments
    // 当它们只有一个参数时，箭头函数可以省略括号。在所有其他情况下，参数必须包含在括号内。该规则强制箭头函数中一致使用圆括号。
    'arrow-parens': ['error', 'always'],

    // https://eslint.org/docs/rules/prefer-destructuring
    // Prefer destructuring from arrays and objects
    // 需要从数组和/或对象解构
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // https://eslint.org/docs/rules/no-confusing-arrow
    // disallow arrow functions where they could be confused with comparisons
    // 禁止使用可能与比较混淆的箭头函数
    // 因考虑到与 Prettier 共存调整此规则
    'no-confusing-arrow': 'off',
  },
}
