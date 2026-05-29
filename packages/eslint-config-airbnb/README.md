# @hz-9/eslint-config-airbnb

A [eslint] config for 'hz-9' (JavaScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]
<br /> ![Node Version][node-version-url] ![Last Commit][last-commit-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://badgen.net/npm/v/@hz-9/eslint-config-airbnb
[npm-license-url]: https://badgen.net/npm/license/@hz-9/eslint-config-airbnb
[npm-downloads-url]: https://badgen.net/npm/dt/@hz-9/eslint-config-airbnb
[node-version-url]: https://badgen.net/npm/node/@hz-9/eslint-config-airbnb
[last-commit-url]: https://badgen.net/github/last-commit/hz-9/lint

[Document](https://hz-9.github.io/lint/guide/eslint-config-airbnb/) | [文档](https://hz-9.github.io/lint/zh-CN/guide/eslint-config-airbnb/)

## Installation

To install the `@hz-9/eslint-config-airbnb` package, run the following command:

```bash
npm install @hz-9/eslint-config-airbnb --save-dev
```

## Usage

To use this configuration, add the following code to your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb'
  ],
}
```

After that, you can run the ESLint fix command to automatically fix linting issues:

```bash
eslint --fix .
```
