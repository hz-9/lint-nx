// eslint-disable-next-line import/no-unresolved
const flatAirbnbPrettier = require('@hz-9/eslint-config-airbnb/flat/airbnb-prettier')

const { plugins, tsParser } = require('../../plugins')

const { TS_FILES_GLOB } = require('../constants')

const baseBestPractices = require('../../airbnb-ts-rules/best-practices')
const baseErrors = require('../../airbnb-ts-rules/errors')
const baseEs6 = require('../../airbnb-ts-rules/es6')
const baseImports = require('../../airbnb-ts-rules/imports')
const baseNode = require('../../airbnb-ts-rules/node')
const baseStrict = require('../../airbnb-ts-rules/strict')
const baseStyle = require('../../airbnb-ts-rules/style')
const baseVariables = require('../../airbnb-ts-rules/variables')
const baseTsOff = require('../../airbnb-ts-rules/ts-off')

const prettierRules = require('../../prettier-rules/index')

module.exports = [
  ...flatAirbnbPrettier,

  {
    files: TS_FILES_GLOB,
    plugins,
    settings: baseImports.settings,
  },
  {
    files: TS_FILES_GLOB,
    languageOptions: {
      parser: tsParser,
    },
  },

  { files: TS_FILES_GLOB, rules: { ...baseBestPractices.rules } },
  { files: TS_FILES_GLOB, rules: { ...baseErrors.rules } },
  { files: TS_FILES_GLOB, languageOptions: { ecmaVersion: 6, sourceType: 'module' }, rules: { ...baseEs6.rules } },
  { files: TS_FILES_GLOB, rules: { ...baseImports.rules } },
  { files: TS_FILES_GLOB, rules: { ...baseNode.rules } },
  { files: TS_FILES_GLOB, rules: { ...baseStrict.rules } },
  { files: TS_FILES_GLOB, rules: { ...baseStyle.rules } },
  { files: TS_FILES_GLOB, rules: { ...baseVariables.rules } },

  { files: TS_FILES_GLOB, rules: baseTsOff.rules },

  { files: TS_FILES_GLOB, rules: { ...prettierRules.rules } },
]
