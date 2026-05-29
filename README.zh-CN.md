# HZ 9 Lint

这是一组 JavaScript "Lint" 扩展和配置。

[文档](https://hz-9.github.io/lint)

## 快速开始

```bash
# 安装依赖
pnpm install

# Lint 所有包
pnpm lint

# 构建所有包
pnpm build

# 格式化代码
pnpm format

# 查看依赖关系图
pnpm nx graph

# 仅对变更的项目运行 lint
pnpm nx affected --target=lint

# 创建 changeset（版本/发布准备）
pnpm changeset

# 提升版本并生成更新日志
pnpm changeset version

# 发布包到 npm
pnpm changeset publish
```

## 包列表

| 包名 | 描述 |
|---------|------|
| `@hz-9/eslint-config-airbnb` | JavaScript ESLint 配置 |
| `@hz-9/eslint-config-airbnb-ts` | TypeScript ESLint 配置 |
| `@hz-9/prettier-config` | Prettier 配置 |
