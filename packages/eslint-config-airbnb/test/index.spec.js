/* global describe, it, expect */
/* eslint-disable global-require */

describe('@hz-9/eslint-config-airbnb', () => {
  it('should load the default config', () => {
    const config = require('../lib/profile/index')
    expect(config).toBeDefined()
    expect(Array.isArray(config.extends)).toBe(true)
    expect(config.extends.length).toBeGreaterThan(0)
  })

  it('should load the index entry', () => {
    const config = require('../lib/index')
    expect(config).toBeDefined()
  })

  it('should load sub-profiles', () => {
    expect(() => require('../lib/profile/airbnb-base')).not.toThrow()
    expect(() => require('../lib/profile/airbnb-prettier')).not.toThrow()
  })

  it('should load rule modules', () => {
    expect(() => require('../lib/rules/best-practices')).not.toThrow()
    expect(() => require('../lib/rules/errors')).not.toThrow()
    expect(() => require('../lib/rules/imports')).not.toThrow()
    expect(() => require('../lib/airbnb-base-rules/best-practices')).not.toThrow()
    expect(() => require('../lib/prettier-rules/index')).not.toThrow()
  })
})
