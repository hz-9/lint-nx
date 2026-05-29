/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 17:44:16
 * @Description  : 继承 eslint-config-airbnb-base/rules/node.js 并重写。
 */

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/node'].map(require.resolve),
  rules: {
    // ... 无重写内容
  },
}
