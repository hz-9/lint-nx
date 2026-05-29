/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 22:23:19
 * @Description  : 用于 Node.js 运行时，针对 JavaScript 的 Eslint 配置规则。
 */

module.exports = {
  extends: ['./index'].map(require.resolve),
  env: {
    browser: false,
    node: true,
  },

  rules: {
    // ...
  },
}
