# HZ 9 Lint

This is a collection of JavaScript 'Lint' extensions and configurations.

[Document](https://hz-9.github.io/lint-nx)

## Quick Start

```bash
# Install dependencies
pnpm install

# Lint all packages
pnpm lint

# Build all packages
pnpm build

# Format code
pnpm format

# View dependency graph
pnpm nx graph

# Run lint only for changed projects
pnpm nx affected --target=lint

# Create a changeset (version/publish preparation)
pnpm changeset

# Bump versions and generate changelogs
pnpm changeset version

# Publish packages to npm
pnpm changeset publish
```

## Packages

| Package | Description |
|---------|-------------|
| `@hz-9/eslint-config-airbnb` | ESLint config for JavaScript |
| `@hz-9/eslint-config-airbnb-ts` | ESLint config for TypeScript |
| `@hz-9/prettier-config` | Prettier config |
