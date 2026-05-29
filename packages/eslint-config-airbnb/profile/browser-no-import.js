/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2025-04-02 00:34:40
 * @Description  : 用于 Browser 运行时，针对 JavaScript 的 Eslint 配置规则。
 */

module.exports = {
  extends: ['./no-import'].map(require.resolve),
  env: {
    browser: true,
    node: false,
  },

  rules: {
    // ...
  },
}
