/* global describe, it, expect */
/* eslint-disable global-require */

describe('@hz-9/eslint-config-airbnb', () => {
  it('should load the default config', () => {
    const config = require('../profile/index')
    expect(config).toBeDefined()
    expect(Array.isArray(config.extends)).toBe(true)
    expect(config.extends.length).toBeGreaterThan(0)
  })

  it('should load the index entry', () => {
    const config = require('../index')
    expect(config).toBeDefined()
  })

  it('should load sub-profiles', () => {
    expect(() => require('../profile/airbnb-base')).not.toThrow()
    expect(() => require('../profile/airbnb-prettier')).not.toThrow()
  })

  it('should load rule modules', () => {
    expect(() => require('../rules/best-practices')).not.toThrow()
    expect(() => require('../rules/errors')).not.toThrow()
    expect(() => require('../rules/imports')).not.toThrow()
    expect(() => require('../airbnb-base-rules/best-practices')).not.toThrow()
    expect(() => require('../prettier-rules/index')).not.toThrow()
  })
})
