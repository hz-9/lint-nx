/* eslint-disable no-console */
const defaultConfig = require('./default')

let prettierPluginSortImportsIndexPath = null
try {
  prettierPluginSortImportsIndexPath = require.resolve('@trivago/prettier-plugin-sort-imports')
} catch (error) {
  console.error()
  console.error('Not found @trivago/prettier-plugin-sort-imports')
  console.error()
}

module.exports = prettierPluginSortImportsIndexPath
  ? {
      plugins: [prettierPluginSortImportsIndexPath],

      ...defaultConfig,

      importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^@hz-9/(.*)$', '^@/(.*)$', '^[./]'],

      importOrderSeparation: true,

      importOrderSortSpecifiers: true,

      importOrderGroupNamespaceSpecifiers: true,

      importOrderParserPlugins: ['typescript', 'classProperties', 'decorators-legacy'],
    }
  : defaultConfig
