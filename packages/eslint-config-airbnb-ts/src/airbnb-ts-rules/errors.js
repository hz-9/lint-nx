// eslint-disable-next-line import/no-unresolved
const { rules: baseErrorsRules } = require('@hz-9/eslint-config-airbnb/airbnb-base-rules/errors')

module.exports = {
  rules: {
    ...baseErrorsRules,

    // Replace Airbnb 'no-loss-of-precision' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-loss-of-precision/
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': baseErrorsRules['no-loss-of-precision'],
  },
}
