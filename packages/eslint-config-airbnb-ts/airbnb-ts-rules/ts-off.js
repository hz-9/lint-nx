module.exports = {
  rules: {
    // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
    // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
    // Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts

    // verify calls of super() in constructors
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'off',

    // enforce return statements in getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': 'off',

    // disallow reassigning const variables
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'off',

    // disallow duplicate arguments in function definitions
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'off',

    // disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'off',

    // disallow reassigning function declarations
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'off',

    // disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'off',

    // disallow new operators with the Symbol object
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'off',

    // disallow calling global object properties as functions
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'off',

    // disallow returning a value from a setter
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'off',

    // disallow use of this/super before calling super() in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'off',

    // disallow undeclared variables
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'off',

    // disallow unreachable code after return, throw, continue, and break statements
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'off',

    // disallow negation of the left operand of a relational operator
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'off',

    // enforce comparison of typeof expressions against valid strings
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'off',

    // The following rules are enabled in Airbnb config, but are recommended to be disabled within TypeScript projects
    // See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import

    // ensure imports point to a file which can be resolved
    // https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/named.md
    'import/named': 'off',

    // prevent importing default as named when the module has no default export
    // https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'off',

    // Disable `import/no-unresolved`, see README.md for details

    // ensure imports point to a file which can be resolved
    // https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',
  },
}
