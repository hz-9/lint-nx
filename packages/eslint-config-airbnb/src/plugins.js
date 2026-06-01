// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const importPlugin = require('eslint-plugin-import')

/** Shared plugin instances for flat config */
module.exports = {
  plugins: { import: importPlugin },
}
