const { rules: baseBestPracticesRules } = require('@hz-9/eslint-config-airbnb/airbnb-base-rules/best-practices')

module.exports = {
  extends: ['@hz-9/eslint-config-airbnb/airbnb-base-rules/best-practices'].map(require.resolve),
  rules: {
    // Replace Airbnb 'default-param-last' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/default-param-last/
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': baseBestPracticesRules['default-param-last'],

    // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/dot-notation/
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-empty-function/
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

    // Replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-implied-eval/
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

    // Replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-loop-func/
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-magic-numbers/
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

    // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-redeclare/
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

    // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-throw-literal/
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': baseBestPracticesRules['no-throw-literal'],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/no-unused-expressions/
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

    // Replace Airbnb 'require-await' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/require-await/
    'require-await': 'off',
    '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],

    // Replace Airbnb 'no-return-await' rule with '@typescript-eslint' version
    // https://typescript-eslint.io/rules/return-await/
    'no-return-await': 'off',
    '@typescript-eslint/return-await': [baseBestPracticesRules['no-return-await'], 'in-try-catch'],
  },
}
