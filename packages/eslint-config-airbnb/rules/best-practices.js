/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-09 17:46:05
 * @Description  : 继承 eslint-config-airbnb-base/rules/best-practices.js 并重写。
 */

module.exports = {
  extends: ['eslint-config-airbnb-base/rules/best-practices'].map(require.resolve),
  rules: {
    // https://eslint.org/docs/rules/class-methods-use-this
    // enforce that class methods use "this"
    // 类中的 methods 必须包含 this 调用
    'class-methods-use-this': 'off',

    /**
     * FIXME
     * disallow reassignment of function parameters
     * disallow parameter object manipulation except for specific exclusions
     *
     * https://eslint.org/docs/rules/no-param-reassign.html
     *
     * 这个规则旨在防止由功能参数的修改或重新分配引起的意外行为。
     *
     * 此属性，当前与官方配置保持一致。若有需要，可以某些内部库，进行支撑。
     */
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

    // https://eslint.org/docs/rules/default-case
    // require default case in switch statements
    // 在switch语句中要求存在默认
    'default-case': 'off',
  },
}
