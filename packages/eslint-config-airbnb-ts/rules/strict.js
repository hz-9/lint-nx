const { rules: customStrictRules } = require('@hz-9/eslint-config-airbnb/rules/strict')
const { rules: baseStrictRules } = require('../airbnb-ts-rules/strict')

module.exports = {
  rules: {
    ...baseStrictRules,

    ...customStrictRules,
  },
}
