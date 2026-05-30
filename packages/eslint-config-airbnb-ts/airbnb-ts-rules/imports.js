const { rules: baseImportsRules } = require('@hz-9/eslint-config-airbnb/airbnb-base-rules/imports')

module.exports = {
  extends: ['@hz-9/eslint-config-airbnb/airbnb-base-rules/imports'].map(require.resolve),
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    // Original: ['.mjs', '.js', '.json']
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    // Original: ['.js', '.mjs', '.jsx']
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },

  rules: {
    // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      baseImportsRules['import/extensions'][0],
      baseImportsRules['import/extensions'][1],
      {
        ...baseImportsRules['import/extensions'][2],
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      baseImportsRules['import/no-extraneous-dependencies'][0],
      {
        ...baseImportsRules['import/no-extraneous-dependencies'][1],
        devDependencies: baseImportsRules['import/no-extraneous-dependencies'][1].devDependencies.reduce(
          (result, devDep) => {
            const toAppend = [devDep]
            const devDepWithTs = devDep.replace(/([cm]?)(js)(x?)\b/g, '$1ts$3')
            if (devDepWithTs !== devDep) {
              toAppend.push(devDepWithTs)
            }
            return [...result, ...toAppend]
          },
          []
        ),
      },
    ],
  },
}
