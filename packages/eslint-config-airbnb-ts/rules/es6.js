const { rules: customES6Rules } = require('@hz-9/eslint-config-airbnb/rules/es6')
const { rules: baseES6Rules } = require('../airbnb-ts-rules/es6')

module.exports = {
  rules: {
    ...baseES6Rules,

    ...customES6Rules,

    // Replace Airbnb 'prefer-destructuring' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/prefer-destructuring/
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': customES6Rules['prefer-destructuring'],
  },
}
