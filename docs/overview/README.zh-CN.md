# 概述

`@hz-9/lint-nx` monorepo 提供一系列 JavaScript/TypeScript Lint 配置，使用 [Nx](https://nx.dev/) 和 [pnpm](https://pnpm.io/) 管理。

## 项目

### [@hz-9/eslint-config-airbnb](../guide/eslint-config-airbnb/)

基于 Airbnb 风格指南的 JavaScript ESLint 配置：
- **配置文件**：`index`、`airbnb-base`、`airbnb-prettier`
- **Flat Config**：通过 `/flat` 入口提供完整支持
- **可定制**：支持扩展和组合使用

### [@hz-9/eslint-config-airbnb-ts](../guide/eslint-config-airbnb-ts/)

基于 Airbnb 风格指南的 TypeScript ESLint 配置：
- **配置文件**：`index`、`airbnb-ts`、`airbnb-prettier`
- **Flat Config**：拆分为 `base`（无需类型）和 `typed`（类型感知）片段
- **TypeScript**：支持 `@typescript-eslint` v8 的类型感知规则

### [@hz-9/prettier-config](../guide/prettier-config/)

用于统一代码格式的 Prettier 配置：
- **配置文件**：`index`、`service-common`、`service-sort-imports`
- **插件**：内置 `@trivago/prettier-plugin-sort-imports` 支持
- **集成**：与 ESLint 配置无缝配合
