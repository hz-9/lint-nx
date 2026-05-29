module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['eslint-config-airbnb', 'eslint-config-airbnb-ts', 'prettier-config', 'all']],
  },
}
