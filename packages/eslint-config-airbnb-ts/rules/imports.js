const { rules: customImportsRules } = require('@hz-9/eslint-config-airbnb/rules/imports')
const { rules: baseImportsRules } = require('../airbnb-ts-rules/imports')

module.exports = {
  rules: {
    ...baseImportsRules,

    ...customImportsRules,
  },
}
