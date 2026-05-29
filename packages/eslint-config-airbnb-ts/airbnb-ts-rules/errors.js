const { rules: baseErrorsRules } = require('@hz-9/eslint-config-airbnb/airbnb-base-rules/errors')

module.exports = {
  extends: ['@hz-9/eslint-config-airbnb/airbnb-base-rules/errors'].map(require.resolve),
  rules: {
    // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-extra-parens/
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

    // Replace Airbnb 'no-extra-semi' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-extra-semi/
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],

    // Replace Airbnb 'no-loss-of-precision' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-loss-of-precision/
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': baseErrorsRules['no-loss-of-precision'],
  },
}
