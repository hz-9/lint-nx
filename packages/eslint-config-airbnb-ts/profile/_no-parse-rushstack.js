/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-09 17:00:00
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-21 11:58:42
 * @Description  : 继承 eslint-config-airbnb-typescript 的规则，并删除 plugins parser
 */

const _configs = require('eslint-config-airbnb-typescript/lib/shared')

const configs = { ..._configs }

delete configs.plugins
delete configs.parser

// /**
//  * 删除与 RushStack 冲突的规则。
//  */
// delete configs.rules['@typescript-eslint/naming-convention']
// delete configs.rules['@typescript-eslint/no-array-constructor']
// delete configs.rules['@typescript-eslint/no-unused-vars']
// delete configs.rules['@typescript-eslint/no-use-before-define']

module.exports = configs
