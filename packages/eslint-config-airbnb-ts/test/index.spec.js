/* global describe, it, expect */
/* eslint-disable global-require, import/no-dynamic-require */

describe('@hz-9/eslint-config-airbnb-ts', () => {
  it('should load the default config', () => {
    const config = require('../lib/profile/index')
    expect(config).toBeDefined()
    expect(Array.isArray(config.extends)).toBe(true)
    expect(config.extends.length).toBeGreaterThan(0)
    expect(config.plugins).toContain('@typescript-eslint')
    expect(config.parser).toBe('@typescript-eslint/parser')
  })

  it('should load sub-profiles', () => {
    expect(() => require('../lib/profile/airbnb-ts')).not.toThrow()
    expect(() => require('../lib/profile/airbnb-prettier')).not.toThrow()
  })

  it('should load rule modules', () => {
    expect(() => require('../lib/airbnb-ts-rules/best-practices')).not.toThrow()
    expect(() => require('../lib/airbnb-ts-rules/errors')).not.toThrow()
    expect(() => require('../lib/airbnb-ts-rules/imports')).not.toThrow()
    expect(() => require('../lib/airbnb-ts-rules/ts-off')).not.toThrow()
    expect(() => require('../lib/rules/best-practices')).not.toThrow()
    expect(() => require('../lib/prettier-rules/index')).not.toThrow()
  })

  it('all extends paths should resolve', () => {
    const config = require('../lib/profile/index')
    config.extends.forEach((ext) => {
      expect(() => require(ext)).not.toThrow()
    })
  })
})
