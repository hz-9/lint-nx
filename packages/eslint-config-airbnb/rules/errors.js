/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 18:08:59
 * @Description  : 继承 eslint-config-airbnb-base/rules/errors.js 并重写。
 */

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/errors'].map(require.resolve),
  rules: {
    // https://eslint.org/docs/rules/no-await-in-loop
    // Disallow await inside of loops
    // 禁止在循环中使用await
    'no-await-in-loop': 'off',
  },
}
