const { rules: customNodeRules } = require('@hz-9/eslint-config-airbnb/rules/node')
const { rules: baseNodeRules } = require('../airbnb-ts-rules/node')

module.exports = {
  rules: {
    ...baseNodeRules,

    ...customNodeRules,
  },
}
