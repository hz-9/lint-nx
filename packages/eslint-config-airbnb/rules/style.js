/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2025-04-02 00:38:35
 * @Description  : 继承 eslint-config-airbnb-base/rules/style.js 并重写。
 */

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/style'].map(require.resolve),
  rules: {
    // require or disallow use of semicolons instead of ASI
    // 此规则强制使用分号。
    semi: ['error', 'never'],

    // require trailing commas in multiline object literals
    // 此规则强制在对象和数组文字中一致地使用尾随逗号。
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    // https://eslint.org/docs/rules/no-underscore-dangle
    // Disallow dangling underscores in identifiers
    // 无下划线悬挂
    'no-underscore-dangle': 'off',

    // https://eslint.org/docs/rules/max-len
    // specify the maximum length of a line in your program
    // 最大长度
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // https://eslint.org/docs/rules/function-paren-newline
    // require line breaks inside function parentheses if there are line breaks between parameters
    // 如果参数之间有换行符，则需要在函数括号内换行
    'function-paren-newline': 'off',

    // https://eslint.org/docs/rules/object-curly-newline
    // enforce line breaks between braces
    // 在大括号之间强制换行
    // 因考虑到与 Prettier 共存调整此规则
    'object-curly-newline': 'off',

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    // Enforce the location of arrow function bodies with implicit returns
    // 使用隐式返回强制箭头函数体的位置
    // 因考虑到与 Prettier 共存调整此规则
    'implicit-arrow-linebreak': 'off',

    // https://eslint.org/docs/rules/operator-linebreak
    // Requires operator at the beginning of the line in multiline statements
    // 在多行语句中，要求行首有运算符
    // 因考虑到与 Prettier 共存调整此规则
    'operator-linebreak': 'off',

    // https://eslint.org/docs/rules/newline-per-chained-call
    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // 在链中的每个方法调用之后强制执行新行，以使其更具可读性和易于维护
    // 因考虑到与 Prettier 共存调整此规则
    'newline-per-chained-call': 'off',

    // https://eslint.org/docs/latest/rules/semi-style/
    // Enforce location of semicolons
    // 强制分号的位置
    'semi-style': 'off',

    // https://eslint.org/docs/latest/rules/indent/
    // Enforce consistent indentation
    // 强制一致的缩进
    indent: 'off',
  },
}
