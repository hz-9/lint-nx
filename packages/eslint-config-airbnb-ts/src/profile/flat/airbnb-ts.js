// eslint-disable-next-line import/no-unresolved
const flatAirbnbBase = require('@hz-9/eslint-config-airbnb/flat/airbnb-base')

const { plugins, tsParser } = require('../../plugins')

const baseBestPractices = require('../../airbnb-ts-rules/best-practices')
const baseErrors = require('../../airbnb-ts-rules/errors')
const baseEs6 = require('../../airbnb-ts-rules/es6')
const baseImports = require('../../airbnb-ts-rules/imports')
const baseNode = require('../../airbnb-ts-rules/node')
const baseStrict = require('../../airbnb-ts-rules/strict')
const baseStyle = require('../../airbnb-ts-rules/style')
const baseVariables = require('../../airbnb-ts-rules/variables')
const baseTsOff = require('../../airbnb-ts-rules/ts-off')

const { TS_FILES_GLOB } = require('../constants')

module.exports = [
  ...flatAirbnbBase,

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

  {
    files: TS_FILES_GLOB,
    rules: baseTsOff.rules,
  },
]
