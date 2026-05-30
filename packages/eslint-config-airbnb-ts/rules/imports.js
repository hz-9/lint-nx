const { rules: customImportsRules } = require('@hz-9/eslint-config-airbnb/rules/imports')

module.exports = {
  rules: {
    ...customImportsRules,

    // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      customImportsRules['import/no-extraneous-dependencies'][0],
      {
        ...customImportsRules['import/no-extraneous-dependencies'][1],
        devDependencies: customImportsRules['import/no-extraneous-dependencies'][1].devDependencies.reduce(
          (result, devDep) => {
            const toAppend = [devDep]
            const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1')
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
