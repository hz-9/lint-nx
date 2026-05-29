const common = require('./common')

let prettierPluginSortImportsIndexPath = null
try {
  prettierPluginSortImportsIndexPath = require.resolve('@trivago/prettier-plugin-sort-imports')
} catch (error) {
  console.error()
  console.error(
    'Need install @trivago/prettier-plugin-sort-imports. If you want to use it, please run `npm install @trivago/prettier-plugin-sort-imports` or `yarn add @trivago/prettier-plugin-sort-imports`'
  )
  console.error(
    "If you don't want to use it, please use the `@hz-9/prettier-config/service-common` in your .prettierrc.js"
  )
  console.error()
}

module.exports = prettierPluginSortImportsIndexPath
  ? {
      plugins: [prettierPluginSortImportsIndexPath],

      ...common,

      importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^@hz-9/(.*)$', '^@/(.*)$', '^[./]'],

      importOrderSeparation: true,

      importOrderSortSpecifiers: true,

      importOrderGroupNamespaceSpecifiers: true,

      importOrderParserPlugins: ['typescript', 'classProperties', 'decorators-legacy'],
    }
  : common
