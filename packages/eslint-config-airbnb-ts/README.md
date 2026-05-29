# @hz-9/eslint-config-airbnb-ts

A [eslint] config for 'hz-9' (TypeScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]
<br /> ![Node Version][node-version-url] ![Last Commit][last-commit-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://badgen.net/npm/v/@hz-9/eslint-config-airbnb-ts
[npm-license-url]: https://badgen.net/npm/license/@hz-9/eslint-config-airbnb-ts
[npm-downloads-url]: https://badgen.net/npm/dt/@hz-9/eslint-config-airbnb-ts
[node-version-url]: https://badgen.net/npm/node/@hz-9/eslint-config-airbnb-ts
[last-commit-url]: https://badgen.net/github/last-commit/hz-9/lint

[Document](https://hz-9.github.io/lint/guide/eslint-config-airbnb-ts/) | [文档](https://hz-9.github.io/lint/zh-CN/guide/eslint-config-airbnb-ts/)

## Installation

To install the `@hz-9/eslint-config-airbnb-ts` package, run the following command:

```bash
npm install @hz-9/eslint-config-airbnb-ts --save-dev
```

## Usage

To use this configuration, add the following code to your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb-ts/node'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
}
```

After that, you can run the ESLint fix command to automatically fix linting issues:

```bash
eslint --fix .
```

## Q & A

## You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser

You can set `parseOptions.project` params.

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb-ts/node'
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```
