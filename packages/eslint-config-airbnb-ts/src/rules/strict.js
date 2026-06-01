// eslint-disable-next-line import/no-unresolved
const { rules: customStrictRules } = require('@hz-9/eslint-config-airbnb/rules/strict')

module.exports = {
  rules: {
    ...customStrictRules,
  },
}
