const { plugins } = require('../plugins')

const baseBestPractices = require('../airbnb-base-rules/best-practices')
const baseErrors = require('../airbnb-base-rules/errors')
const baseEs6 = require('../airbnb-base-rules/es6')
const baseImports = require('../airbnb-base-rules/imports')
const baseNode = require('../airbnb-base-rules/node')
const baseStrict = require('../airbnb-base-rules/strict')
const baseStyle = require('../airbnb-base-rules/style')
const baseVariables = require('../airbnb-base-rules/variables')

module.exports = [
  {
    plugins,
    settings: baseImports.settings,
  },
  { rules: { ...baseBestPractices.rules } },
  { rules: { ...baseErrors.rules } },
  { languageOptions: { ecmaVersion: 6, sourceType: 'module' }, rules: { ...baseEs6.rules } },
  { rules: { ...baseImports.rules } },
  { rules: { ...baseNode.rules } },
  { rules: { ...baseStrict.rules } },
  { rules: { ...baseStyle.rules } },
  { rules: { ...baseVariables.rules } },
  { languageOptions: { ecmaVersion: 2018, sourceType: 'module' } },
]
