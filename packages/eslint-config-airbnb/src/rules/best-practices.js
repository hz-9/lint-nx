module.exports = {
  rules: {
    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // disallow reassignment of function parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
          'state', // for vuex state
        ],
      },
    ],

    // require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': 'off',
  },
}
