const { rules: baseStyleRules } = require('@hz-9/eslint-config-airbnb/airbnb-base-rules/style')

module.exports = {
  extends: ['@hz-9/eslint-config-airbnb/airbnb-base-rules/style'].map(require.resolve),
  rules: {
    // Replace Airbnb 'brace-style' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/brace-style/
    'brace-style': 'off',
    '@typescript-eslint/brace-style': baseStyleRules['brace-style'],

    // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
    // https://typescript-eslint.io/rules/naming-convention/
    camelcase: 'off',
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
    '@typescript-eslint/naming-convention': [
      'error',
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Replace Airbnb 'comma-dangle' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/comma-dangle/
    // The TypeScript version also adds 3 new options, all of which should be set to the same value as the base config
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      baseStyleRules['comma-dangle'][0],
      {
        ...baseStyleRules['comma-dangle'][1],
        enums: baseStyleRules['comma-dangle'][1].arrays,
        generics: baseStyleRules['comma-dangle'][1].arrays,
        tuples: baseStyleRules['comma-dangle'][1].arrays,
      },
    ],

    // Replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/comma-spacing/
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': baseStyleRules['comma-spacing'],

    // Replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/func-call-spacing/
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/indent/
    indent: 'off',
    '@typescript-eslint/indent': baseStyleRules.indent,

    // Replace Airbnb 'keyword-spacing' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/keyword-spacing/
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': baseStyleRules['keyword-spacing'],

    // Replace Airbnb 'lines-between-class-members' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/lines-between-class-members/
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': baseStyleRules['lines-between-class-members'],

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-array-constructor/
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

    // Replace Airbnb 'space-before-blocks' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/space-before-blocks/
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': baseStyleRules['space-before-blocks'],

    // Replace Airbnb 'quotes' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/quotes/
    quotes: 'off',
    '@typescript-eslint/quotes': baseStyleRules.quotes,

    // Replace Airbnb 'semi' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/semi/
    semi: 'off',
    '@typescript-eslint/semi': baseStyleRules.semi,

    // Replace Airbnb 'space-before-function-paren' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/space-before-function-paren/
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],

    // Replace Airbnb 'space-infix-ops' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/space-infix-ops/
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': baseStyleRules['space-infix-ops'],

    // Replace Airbnb 'object-curly-spacing' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/object-curly-spacing/
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': baseStyleRules['object-curly-spacing'],
  },
}
