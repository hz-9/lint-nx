// eslint-disable-next-line import/no-unresolved
const { rules: baseVariablesRules } = require('@hz-9/eslint-config-airbnb/airbnb-base-rules/variables')

module.exports = {
  rules: {
    ...baseVariablesRules,

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-shadow/
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-unused-vars/
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-use-before-define/
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],
  },
}
