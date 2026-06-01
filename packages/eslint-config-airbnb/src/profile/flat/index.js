const { plugins } = require('../../plugins')

const baseBestPractices = require('../../airbnb-base-rules/best-practices')
const baseErrors = require('../../airbnb-base-rules/errors')
const baseEs6 = require('../../airbnb-base-rules/es6')
const baseImports = require('../../airbnb-base-rules/imports')
const baseNode = require('../../airbnb-base-rules/node')
const baseStrict = require('../../airbnb-base-rules/strict')
const baseStyle = require('../../airbnb-base-rules/style')
const baseVariables = require('../../airbnb-base-rules/variables')

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
  {
    plugins,
    settings: baseImports.settings,
  },

  { rules: { ...baseBestPractices.rules } },
  { rules: { ...baseErrors.rules } },
  { languageOptions: { ecmaVersion: 6, sourceType: 'module' }, rules: { ...baseEs6.rules } },
  { languageOptions: { ecmaVersion: 6, sourceType: 'module' }, rules: { ...baseImports.rules } },
  { rules: { ...baseNode.rules } },
  { rules: { ...baseStrict.rules } },
  { rules: { ...baseStyle.rules } },
  { rules: { ...baseVariables.rules } },

  { rules: { ...prettierRules.rules } },

  { rules: { ...hz9BestPractices.rules } },
  { rules: { ...hz9Errors.rules } },
  { rules: { ...hz9Es6.rules } },
  { rules: { ...hz9Imports.rules } },
  { rules: { ...hz9Node.rules } },
  { rules: { ...hz9Strict.rules } },
  { rules: { ...hz9Style.rules } },
  { rules: { ...hz9Variables.rules } },

  { languageOptions: { ecmaVersion: 2018, sourceType: 'module' } },
]
