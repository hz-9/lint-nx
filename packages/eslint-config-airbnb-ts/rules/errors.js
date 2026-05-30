const { rules: customErrorsRules } = require('@hz-9/eslint-config-airbnb/rules/errors')
const { rules: baseErrorsRules } = require('../airbnb-ts-rules/errors')

module.exports = {
  rules: {
    ...baseErrorsRules,

    ...customErrorsRules,
  },
}
