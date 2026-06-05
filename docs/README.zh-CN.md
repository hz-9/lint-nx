# HZ 9 Lint

一组 JavaScript/TypeScript 的 Lint 配置（ESLint + Prettier），使用 [Nx](https://nx.dev/) 和 [pnpm](https://pnpm.io/) 管理。

## 包列表

| 包名 | 描述 |
|---------|-------------|
| [@hz-9/eslint-config-airbnb](./guide/eslint-config-airbnb/) | JavaScript ESLint 配置 |
| [@hz-9/eslint-config-airbnb-ts](./guide/eslint-config-airbnb-ts/) | TypeScript ESLint 配置 |
| [@hz-9/prettier-config](./guide/prettier-config/) | Prettier 配置 |

## 快速开始

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 代码检查
pnpm lint

# 格式化代码
pnpm format
```
