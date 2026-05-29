const { rules: customVariablesRules } = require('@hz-9/eslint-config-airbnb/rules/variables')
const { rules: baseVariablesRules } = require('../airbnb-ts-rules/variables')

module.exports = {
  rules: {
    ...baseVariablesRules,

    ...customVariablesRules,

    // Replace Airbnb 'init-declarations' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/init-declarations/
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': customVariablesRules['init-declarations'],

    // disallow declaration of variables already declared in the outer scope
    // https://typescript-eslint.io/rules/no-shadow/
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
}
