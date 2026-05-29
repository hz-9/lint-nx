/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 22:22:43
 * @Description  : 整合配置规则。
 */

module.exports = {
  extends: ['@hz-9/eslint-config-airbnb'].map(require.resolve),

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],

      extends: ['eslint-config-airbnb-typescript/lib/shared', '../rules/all'].map(require.resolve),

      rules: {
        // ...
      },
    },
  ],

  rules: {
    // ...
  },
}
