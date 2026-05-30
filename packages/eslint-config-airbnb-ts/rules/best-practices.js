const { rules: customBestPracticesRules } = require('@hz-9/eslint-config-airbnb/rules/best-practices')
const { rules: baseBestPracticesRules } = require('../airbnb-ts-rules/best-practices')

module.exports = {
  rules: {
    ...baseBestPracticesRules,

    ...customBestPracticesRules,

    // Replace Airbnb 'class-methods-use-this' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/class-methods-use-this/
    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': customBestPracticesRules['class-methods-use-this'],

    // disallow floating promises in your code (must be handled appropriately)
    // https://typescript-eslint.io/rules/no-floating-promises/
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
      },
    ],
  },
}
