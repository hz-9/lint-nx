# @hz-9/prettier-config

一个适用于 'hz-9' 的 [prettier] 配置。

![NPM 版本][npm-version-url] ![NPM 许可证][npm-license-url] ![NPM 下载量][npm-downloads-url]
<br /> ![Node 版本][node-version-url] ![最后提交][last-commit-url]

[prettier]: https://prettier.io/
[npm-version-url]: https://badgen.net/npm/v/@hz-9/prettier-config
[npm-license-url]: https://badgen.net/npm/license/@hz-9/prettier-config
[npm-downloads-url]: https://badgen.net/npm/dt/@hz-9/prettier-config
[node-version-url]: https://badgen.net/npm/node/@hz-9/prettier-config
[last-commit-url]: https://badgen.net/github/last-commit/hz-9/lint

[Document](https://hz-9.github.io/lint/guide/prettier-config/) | [文档](https://hz-9.github.io/lint/zh-CN/guide/prettier-config/)

## 安装

要安装 `@hz-9/prettier-config` 包，请运行以下命令：

```bash
npm install @hz-9/prettier-config --save-dev
```

## 使用

要使用此配置，请将以下代码添加到您的 `.prettierrc.js` 文件中：

```javascript
const prettierConfig = require('@hz-9/prettier-config')

module.exports = prettierConfig
```

之后，你可以运行格式化命令，调整文件格式：

```bash
prettier --write .
```

## 所有规则

| 名称 | 说明 |
| --- | --- |
| index | 默认配置 |
| service-common | 服务端默认规则 |
| service-sort-imports | 服务端默认规则 + sort-imports 的规则 |
