---
'@hz-9/eslint-config-airbnb-ts': patch
---

- fix: correct `profile/index.js` extends to `../airbnb-ts-rules/*` so TS-aware rules are actually loaded
- fix: point `prettier-rules/index.js` to `@hz-9/eslint-config-airbnb/prettier-rules/index` instead of the unrelated `best-practices` module
- refactor: drop duplicated `airbnb-ts-rules` import inside `rules/*.js` since base rules are already pulled in via `profile/index.js` extends
- test: add Vitest spec validating default config, sub-profiles and all rule modules resolve
- build: add `vitest.config.ts`, `tsconfig.json` and register `test` target in `project.json`
- docs: simplify usage example to `extends: ['@hz-9/eslint-config-airbnb-ts']` and fix `last-commit` badge link
