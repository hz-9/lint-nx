const { rules: baseImportsRules } = require('../airbnb-base-rules/imports')

module.exports = {
  rules: {
    ...baseImportsRules,

    // prefer default export when a module has a single export
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // require a newline after import statements
    // https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/newline-after-import.md
    'import/newline-after-import': 'off',

    // Forbid the use of extraneous packages
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      baseImportsRules['import/no-extraneous-dependencies'][0],
      {
        ...baseImportsRules['import/no-extraneous-dependencies'][1],
        devDependencies: [
          ...baseImportsRules['import/no-extraneous-dependencies'][1].devDependencies,

          // support for vite config files
          '**/vite.config.{js,cjs,mjs}',
        ],
      },
    ],
  },
}
