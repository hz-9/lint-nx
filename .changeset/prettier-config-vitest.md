---
'@hz-9/prettier-config': patch
---

- test: add Vitest spec covering default profile and `sort-imports` service entries
- build: add `vitest.config.ts`, `tsconfig.json` and register `test` target in `project.json`
- chore: add `eslint-disable no-console` in `profile/service/sort-imports.js` to silence intentional warning logs
- docs: correct `last-commit` badge link in guide README to point to `hz-9/lint-nx`
