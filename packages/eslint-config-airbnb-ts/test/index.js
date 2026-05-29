/**
 * @Author       : Chen Zhen
 * @Date         : 2024-05-21 11:39:56
 * @LastEditors  : Chen Zhen
 * @LastEditTime : 2024-05-21 11:45:25
 * @Description  : 比较规则。
 */

const rushstackRules = require('@rushstack/eslint-config/profile/node')
const airbnbTS = require('eslint-config-airbnb-typescript/lib/shared')

;(() => {
  const rushstackRuleKeys = Object.keys(rushstackRules.overrides[0].rules)
  const airbnbTSRuleKeys = Object.keys(airbnbTS.rules)
  // console.log('rules-1', rushstackRuleKeys)
  // console.log('rules-2', airbnbTSRuleKeys)

  console.log(
    'RushstackRules 会被 Airbnb 重复声明的规则。',
    rushstackRuleKeys.filter((i) => airbnbTSRuleKeys.includes(i))
  )
})()
