// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const importPlugin = require('eslint-plugin-import')
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const tsPlugin = require('@typescript-eslint/eslint-plugin')
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const tsParser = require('@typescript-eslint/parser')

/** Shared plugin instances for flat config (TypeScript) */
module.exports = {
  plugins: {
    import: importPlugin,
    '@typescript-eslint': tsPlugin,
  },
  tsParser,
}
