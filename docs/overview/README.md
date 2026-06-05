# Overview

The `@hz-9/lint-nx` monorepo provides a collection of JavaScript/TypeScript lint configurations, managed with [Nx](https://nx.dev/) and [pnpm](https://pnpm.io/).

## Projects

### [@hz-9/eslint-config-airbnb](../guide/eslint-config-airbnb/)

An ESLint configuration for JavaScript projects, based on Airbnb's style guide:
- **Profiles**: `index`, `airbnb-base`, `airbnb-prettier`
- **Flat Config**: Full flat config support via `/flat` entry
- **Customization**: Extendable and composable profiles

### [@hz-9/eslint-config-airbnb-ts](../guide/eslint-config-airbnb-ts/)

An ESLint configuration for TypeScript projects, based on Airbnb's style guide:
- **Profiles**: `index`, `airbnb-ts`, `airbnb-prettier`
- **Flat Config**: Split into `base` (no type info) and `typed` (type-aware) fragments
- **TypeScript**: Supports `@typescript-eslint` v8 with type-aware rules

### [@hz-9/prettier-config](../guide/prettier-config/)

A Prettier configuration for consistent code formatting:
- **Profiles**: `index`, `service-common`, `service-sort-imports`
- **Plugins**: Built-in `@trivago/prettier-plugin-sort-imports` support
- **Integration**: Works seamlessly with ESLint configs
