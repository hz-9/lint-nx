/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 17:44:27
 * @Description  : 继承 eslint-config-airbnb-base/rules/strict.js 并重写。
 */

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/strict'].map(require.resolve),
  rules: {
    // ... 无重写内容
  },
}
