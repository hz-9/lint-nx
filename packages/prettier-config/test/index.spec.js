/* global describe, it, expect */
/* eslint-disable global-require */

describe('@hz-9/prettier-config', () => {
  it('should load the default config', () => {
    const config = require('../profile/index')
    expect(config).toBeDefined()
    expect(config.printWidth).toBe(120)
    expect(config.singleQuote).toBe(true)
    expect(config.semi).toBe(false)
    expect(config.trailingComma).toBe('es5')
  })

  it('should load sub-profiles', () => {
    expect(() => require('../profile/service/common')).not.toThrow()
    expect(() => require('../profile/service/sort-imports')).not.toThrow()
  })
})
