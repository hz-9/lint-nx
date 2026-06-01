// eslint-disable-next-line import/no-unresolved
const { rules: customStyleRules } = require('@hz-9/eslint-config-airbnb/rules/style')

module.exports = {
  rules: {
    ...customStyleRules,

    // disallow empty interfaces (allow single extends)
    // https://typescript-eslint.io/rules/no-empty-interface/
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],

    // disallow parameter properties (allow all visibility modifiers)
    // https://typescript-eslint.io/rules/parameter-properties/
    '@typescript-eslint/parameter-properties': [
      'warn',
      {
        allow: ['public', 'public readonly', 'protected', 'protected readonly', 'private', 'private readonly'],
      },
    ],
  },
}
