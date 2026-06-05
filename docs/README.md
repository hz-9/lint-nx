# HZ 9 Lint

A collection of JavaScript/TypeScript lint configurations (ESLint + Prettier), managed with [Nx](https://nx.dev/) and [pnpm](https://pnpm.io/).

## Packages

| Package | Description |
|---------|-------------|
| [@hz-9/eslint-config-airbnb](./guide/eslint-config-airbnb/) | ESLint config for JavaScript |
| [@hz-9/eslint-config-airbnb-ts](./guide/eslint-config-airbnb-ts/) | ESLint config for TypeScript |
| [@hz-9/prettier-config](./guide/prettier-config/) | Prettier config |

## Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Format code
pnpm format
```
