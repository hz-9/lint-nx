// Configuration reference: https://prettier.io/en/configuration.html

module.exports = {
  ...require('@hz-9/prettier-config'),

  plugins: ['@trivago/prettier-plugin-sort-imports'],

  // @trivago/prettier-plugin-sort-imports
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@hz-9/(.*)$', '^@hz-9-(.*)$', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'classProperties', 'decorators-legacy'],
}
