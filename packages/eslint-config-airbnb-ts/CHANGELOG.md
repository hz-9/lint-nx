# Change Log - @hz-9/eslint-config-airbnb-ts

## 1.0.0

### Major Changes

- refactor: remove deprecated @typescript-eslint rules and upgrade to v8

  Remove rules that have been deprecated or removed in @typescript-eslint v8:
  - no-throw-literal
  - no-extra-parens
  - no-extra-semi
  - func-call-spacing
  - indent
  - lines-around-comment

  Upgrade @typescript-eslint/eslint-plugin and @typescript-eslint/parser from ^6.0.0 to ^8.60.0

### Minor Changes

- refactor: migrate config source to src/ with build system

### Patch Changes

- Updated dependencies
  - @hz-9/eslint-config-airbnb@0.8.0

## 0.9.1

### Patch Changes

- fix: remove baseImportsRules spread from imports rules
- Updated dependencies
  - @hz-9/eslint-config-airbnb@0.7.1

## 0.9.0

### Minor Changes

- feat: add ts/tsx extension support for 'import/no-extraneous-dependencies' rule

### Patch Changes

- Updated dependencies
  - @hz-9/eslint-config-airbnb@0.7.0

## 0.8.1

### Patch Changes

- fix: correct `profile/index.js` extends to `../airbnb-ts-rules/*` so TS-aware rules are actually loaded
- fix: point `prettier-rules/index.js` to `@hz-9/eslint-config-airbnb/prettier-rules/index` instead of the unrelated `best-practices` module
- refactor: drop duplicated `airbnb-ts-rules` import inside `rules/*.js` since base rules are already pulled in via `profile/index.js` extends
- test: add Vitest spec validating default config, sub-profiles and all rule modules resolve
- build: add `vitest.config.ts`, `tsconfig.json` and register `test` target in `project.json`
- docs: simplify usage example to `extends: ['@hz-9/eslint-config-airbnb-ts']` and fix `last-commit` badge link
- Updated dependencies
  - @hz-9/eslint-config-airbnb@0.6.1

## 0.8.0

### Minor Changes

- eac9d20: refactor: comprehensive refactor to reduce dependencies

### Patch Changes

- Updated dependencies [eac9d20]
  - @hz-9/eslint-config-airbnb@0.6.0

## 0.7.0

### Minor Changes

- d6f4de6: chore: migrate monorepo toolchain from Rush.js to Nx + Changesets

### Patch Changes

- Updated dependencies [d6f4de6]
  - @hz-9/eslint-config-airbnb@0.5.0

This log was last generated on Tue, 01 Apr 2025 16:45:46 GMT and should not be manually modified.

## 0.6.2

Tue, 01 Apr 2025 16:45:46 GMT

### Patches

- chore: change `.eslintrc.js`

## 0.6.1

Tue, 01 Apr 2025 16:19:21 GMT

### Patches

- docs: change `README.md`

## 0.6.0

Wed, 12 Mar 2025 07:37:01 GMT

### Minor changes

- feat: add special rules for unit tests

## 0.5.11

Mon, 07 Oct 2024 16:58:51 GMT

### Patches

- docs: add `Q & A` on `README.md`

## 0.5.10

Mon, 24 Jun 2024 06:00:52 GMT

### Patches

- docs: updated the badge in `README.md`

## 0.5.9

Sun, 23 Jun 2024 16:03:28 GMT

### Patches

- docs: change `README.md`

## 0.5.8

Sat, 22 Jun 2024 02:33:20 GMT

### Patches

- docs: add docs files

## 0.5.7

Mon, 17 Jun 2024 11:58:24 GMT

### Patches

- docs: add `homepage` paramater in `package.json`

## 0.5.6

Wed, 12 Jun 2024 09:02:40 GMT

### Patches

- docs: add `keywords` paramater in `package.json`

## 0.5.5

Wed, 12 Jun 2024 08:39:00 GMT

### Patches

- docs: change `repository` paramater in `package.json`

## 0.5.4

Tue, 11 Jun 2024 11:56:35 GMT

### Patches

- docs: upgrade `README.md`

## 0.5.3

Tue, 11 Jun 2024 04:01:35 GMT

### Patches

- ci: upgrade `package.json`

## 0.5.2

Tue, 11 Jun 2024 02:13:05 GMT

### Patches

- docs: change `README.md`

## 0.5.1

Tue, 11 Jun 2024 02:09:32 GMT

### Patches

- feat: add some properties to `package.json` and write `README.md`

## 0.5.0

Tue, 11 Jun 2024 01:33:52 GMT

### Minor changes

- feat: change scope `@hz9` -> `@hz-9`

## 0.4.1

Tue, 21 May 2024 04:00:47 GMT

### Patches

- fix: resolve `rushstack` and `aitbnb-typescript` conflicts

## 0.4.0

Mon, 13 May 2024 13:59:57 GMT

### Minor changes

- change rules

## 0.3.2

Fri, 10 May 2024 06:54:11 GMT

### Patches

- fix: limit typescript version to `>=5.0.0 <5.4.0`

## 0.3.1

Thu, 09 May 2024 16:19:29 GMT

### Patches

- fix: reduce `typescript-eslint` to `6.0.0`

## 0.3.0

Thu, 09 May 2024 15:47:35 GMT

### Minor changes

- feat: upgrade typescript to 5.0.0

## 0.2.2

Thu, 09 May 2024 14:43:49 GMT

### Patches

- fix: remove plugin and parse on `Rushstack` project

## 0.2.1

Thu, 09 May 2024 14:32:12 GMT

### Patches

- fix: add `profile/modern-module-resolution.js`

## 0.2.0

Thu, 09 May 2024 14:25:59 GMT

### Minor changes

- feat: support `Rushstack` project

## 0.1.0

Thu, 09 May 2024 14:17:00 GMT

### Minor changes

- feat: first commit
