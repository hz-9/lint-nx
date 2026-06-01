// eslint-disable-next-line import/no-unresolved
const flatAirbnbIndex = require('@hz-9/eslint-config-airbnb/flat')

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

const hz9BestPractices = require('../../rules/best-practices')
const hz9Errors = require('../../rules/errors')
const hz9Es6 = require('../../rules/es6')
const hz9Imports = require('../../rules/imports')
const hz9Node = require('../../rules/node')
const hz9Strict = require('../../rules/strict')
const hz9Style = require('../../rules/style')
const hz9Variables = require('../../rules/variables')

module.exports = [
  ...flatAirbnbIndex,

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

  { files: TS_FILES_GLOB, rules: { ...hz9BestPractices.rules } },
  { files: TS_FILES_GLOB, rules: { ...hz9Errors.rules } },
  { files: TS_FILES_GLOB, rules: { ...hz9Es6.rules } },
  { files: TS_FILES_GLOB, rules: { ...hz9Imports.rules } },
  { files: TS_FILES_GLOB, rules: { ...hz9Node.rules } },
  { files: TS_FILES_GLOB, rules: { ...hz9Strict.rules } },
  { files: TS_FILES_GLOB, rules: { ...hz9Style.rules } },
  { files: TS_FILES_GLOB, rules: { ...hz9Variables.rules } },
]
