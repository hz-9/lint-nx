// eslint-disable-next-line import/no-unresolved
const { rules: customES6Rules } = require('@hz-9/eslint-config-airbnb/rules/es6')

module.exports = {
  rules: {
    ...customES6Rules,

    // Replace Airbnb 'prefer-destructuring' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/prefer-destructuring/
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': customES6Rules['prefer-destructuring'],
  },
}
