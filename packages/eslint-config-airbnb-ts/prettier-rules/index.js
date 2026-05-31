const { rules: basePrettierRules } = require('@hz-9/eslint-config-airbnb/prettier-rules/index')

module.exports = {
  rules: {
    ...basePrettierRules,

    // enforce the consistent use of backticks, double, or single quotes
    // https://typescript-eslint.io/rules/quotes
    '@typescript-eslint/quotes': 'off',

    // disallow or enforce spaces inside of blocks
    // https://typescript-eslint.io/rules/block-spacing
    '@typescript-eslint/block-spacing': 'off',

    // enforce consistent brace style for blocks
    // https://typescript-eslint.io/rules/brace-style
    '@typescript-eslint/brace-style': 'off',

    // require or disallow trailing commas
    // https://typescript-eslint.io/rules/comma-dangle
    '@typescript-eslint/comma-dangle': 'off',

    // enforce consistent spacing before and after commas
    // https://typescript-eslint.io/rules/comma-spacing
    '@typescript-eslint/comma-spacing': 'off',

    // enforce consistent spacing between keys and values in object literal properties
    // https://typescript-eslint.io/rules/key-spacing
    '@typescript-eslint/key-spacing': 'off',

    // enforce consistent spacing before and after keywords
    // https://typescript-eslint.io/rules/keyword-spacing
    '@typescript-eslint/keyword-spacing': 'off',

    // enforce delimiter style for type members
    // https://typescript-eslint.io/rules/member-delimiter-style
    '@typescript-eslint/member-delimiter-style': 'off',

    // enforce consistent spacing inside braces
    // https://typescript-eslint.io/rules/object-curly-spacing
    '@typescript-eslint/object-curly-spacing': 'off',

    // require or disallow semicolons instead of ASI
    // https://typescript-eslint.io/rules/semi
    '@typescript-eslint/semi': 'off',

    // enforce consistent spacing before blocks
    // https://typescript-eslint.io/rules/space-before-blocks
    '@typescript-eslint/space-before-blocks': 'off',

    // enforce consistent spacing before function definition opening parenthesis
    // https://typescript-eslint.io/rules/space-before-function-paren
    '@typescript-eslint/space-before-function-paren': 'off',

    // require spacing around infix operators
    // https://typescript-eslint.io/rules/space-infix-ops
    '@typescript-eslint/space-infix-ops': 'off',

    // enforce spacing around type annotations
    // https://typescript-eslint.io/rules/type-annotation-spacing
    '@typescript-eslint/type-annotation-spacing': 'off',
  },
}
