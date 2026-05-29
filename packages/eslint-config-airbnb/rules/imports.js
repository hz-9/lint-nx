module.exports = {
  rules: {
    // prefer default export when a module has a single export
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // require a newline after import statements
    // https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/newline-after-import.md
    'import/newline-after-import': 'off',
  },
}
