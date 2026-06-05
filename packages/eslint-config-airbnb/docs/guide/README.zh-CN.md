# @hz-9/eslint-config-airbnb

一个适用于 'hz-9'（JavaScript）的 [eslint] 配置。

![NPM 版本][npm-version-url] ![NPM 许可证][npm-license-url] ![NPM 下载量][npm-downloads-url]
<br /> ![Node 版本][node-version-url] ![最后提交][last-commit-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://badgen.net/npm/v/@hz-9/eslint-config-airbnb
[npm-license-url]: https://badgen.net/npm/license/@hz-9/eslint-config-airbnb
[npm-downloads-url]: https://badgen.net/npm/dt/@hz-9/eslint-config-airbnb
[node-version-url]: https://badgen.net/npm/node/@hz-9/eslint-config-airbnb
[last-commit-url]: https://badgen.net/github/last-commit/hz-9/lint-nx

## 安装

要安装 `@hz-9/eslint-config-airbnb` 包，请运行以下命令：

```bash
npm install @hz-9/eslint-config-airbnb --save-dev
```

## 使用

本包同时提供 **Legacy eslintrc** 和 **Flat Config** 两种格式。

### Legacy（eslintrc）

将以下代码添加到您的 `.eslintrc.js` 文件中：

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb'
  ],
}
```

可用的子路径导出：

| 导出路径 | 说明 |
|----------|------|
| `@hz-9/eslint-config-airbnb`（或 `./index`） | airbnb-base + hz-9 规则 |
| `@hz-9/eslint-config-airbnb/airbnb-base` | 仅 airbnb-base 规则 |
| `@hz-9/eslint-config-airbnb/airbnb-prettier` | airbnb-base + prettier 规则 |

### Flat Config（ESLint >= 9.x）

将以下代码添加到您的 `eslint.config.js` 文件中：

```javascript
const airbnbConfig = require('@hz-9/eslint-config-airbnb/flat')

module.exports = [
  ...airbnbConfig,
]
```

可用的子路径导出：

| 导出路径 | 说明 |
|----------|------|
| `@hz-9/eslint-config-airbnb/flat` | airbnb-base + prettier + hz-9 规则 |
| `@hz-9/eslint-config-airbnb/flat/airbnb-base` | 仅 airbnb-base 规则 |
| `@hz-9/eslint-config-airbnb/flat/airbnb-prettier` | airbnb-base + prettier 规则 |

之后，您可以运行 ESLint 修复命令来自动修复 linting 问题：

```bash
eslint --fix .
```
