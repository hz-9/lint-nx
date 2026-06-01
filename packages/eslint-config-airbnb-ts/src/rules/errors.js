// eslint-disable-next-line import/no-unresolved
const { rules: customErrorsRules } = require('@hz-9/eslint-config-airbnb/rules/errors')

module.exports = {
  rules: {
    ...customErrorsRules,
  },
}
