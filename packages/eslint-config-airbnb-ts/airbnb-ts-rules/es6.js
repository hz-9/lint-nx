const { rules: baseES6Rules } = require('@hz-9/eslint-config-airbnb/airbnb-base-rules/es6')

module.exports = {
  extends: ['@hz-9/eslint-config-airbnb/airbnb-base-rules/es6'].map(require.resolve),
  rules: {
    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-dupe-class-members/
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-useless-constructor/
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],
  },
}
