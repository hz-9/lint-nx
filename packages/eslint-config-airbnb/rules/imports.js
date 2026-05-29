/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-13 21:57:29
 * @Description  : 继承 eslint-config-airbnb-base/rules/imports.js 并重写。
 */

const baseImportRules = require('eslint-config-airbnb-base/rules/imports')

// ... 对 import/no-extraneous-dependencies 规则提供扩展能力

const importNoExtraneousDependencies = ['off']
const ruleKey = 'import/no-extraneous-dependencies'
if (baseImportRules.rules && baseImportRules.rules[ruleKey]) {
  importNoExtraneousDependencies[0] = baseImportRules.rules[ruleKey][0] || 'off'

  importNoExtraneousDependencies[1] = baseImportRules.rules[ruleKey][1] || {}

  if (importNoExtraneousDependencies[1].devDependencies) {
    importNoExtraneousDependencies[1].devDependencies = [
      ...importNoExtraneousDependencies[1].devDependencies,
      // ... 等待补充其他文件规则。
    ]
  }
}

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/imports'].map(require.resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.json', '.tsx'],
      },
    },

    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md
    // 当一个模块只有一个导出时，更喜欢使用默认导出而不是命名导出。
    'import/prefer-default-export': 'off',

    'import/no-extraneous-dependencies': importNoExtraneousDependencies,

    // https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/newline-after-import.md
    'import/newline-after-import': 'off',
  },
}
