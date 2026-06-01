const { plugins, tsParser } = require('../plugins')

const baseBestPractices = require('../airbnb-ts-rules/best-practices')
const baseErrors = require('../airbnb-ts-rules/errors')
const baseEs6 = require('../airbnb-ts-rules/es6')
const baseImports = require('../airbnb-ts-rules/imports')
const baseNode = require('../airbnb-ts-rules/node')
const baseStrict = require('../airbnb-ts-rules/strict')
const baseStyle = require('../airbnb-ts-rules/style')
const baseVariables = require('../airbnb-ts-rules/variables')

const { rules: tsOffRules } = require('../airbnb-ts-rules/ts-off')

module.exports = [
  {
    plugins,
    settings: baseImports.settings,
  },
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
  },
  { rules: { ...baseBestPractices.rules } },
  { rules: { ...baseErrors.rules } },
  { languageOptions: { ecmaVersion: 6, sourceType: 'module' }, rules: { ...baseEs6.rules } },
  { rules: { ...baseImports.rules } },
  { rules: { ...baseNode.rules } },
  { rules: { ...baseStrict.rules } },
  { rules: { ...baseStyle.rules } },
  { rules: { ...baseVariables.rules } },
  {
    files: ['*.ts', '*.tsx'],
    rules: tsOffRules,
  },
]
