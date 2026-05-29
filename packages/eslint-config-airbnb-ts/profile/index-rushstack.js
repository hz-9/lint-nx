/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2025-03-12 15:15:33
 * @Description  : 整合配置规则。
 */

module.exports = {
  extends: ['@hz-9/eslint-config-airbnb'].map(require.resolve),

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],

      extends: ['./_no-parse-rushstack', '../rules/all'].map(require.resolve),

      rules: {
        // ...
      },
    },
    {
      files: [
        '*.spec.ts',
        '*.spec.tsx',
        '*.spec.cts',
        '*.spec.mts',
        '*.test.ts',
        '*.test.tsx',
        '*.test.cts',
        '*.test.mts',
      ],

      extends: ['../rules/test'].map(require.resolve),

      rules: {
        // ...
      },
    },
  ],

  rules: {
    // ...
  },
}
