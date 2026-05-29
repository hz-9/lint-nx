/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 17:47:06
 * @Description  : 继承 eslint-config-airbnb-base/rules/variables.js 并重写。
 */

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/variables'].map(require.resolve),
  rules: {
    // rule: https://eslint.org/docs/rules/init-declarations.html
    // Require or disallow initialization in variable declarations
    // 此规则旨在强制执行或消除声明期间的变量初始化。
    'init-declarations': ['error', 'always'],
  },
}
