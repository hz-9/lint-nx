# @hz-9/eslint-config-airbnb-ts

A [eslint] config for 'hz-9' (TypeScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]
<br /> ![Node Version][node-version-url] ![Last Commit][last-commit-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://badgen.net/npm/v/@hz-9/eslint-config-airbnb-ts
[npm-license-url]: https://badgen.net/npm/license/@hz-9/eslint-config-airbnb-ts
[npm-downloads-url]: https://badgen.net/npm/dt/@hz-9/eslint-config-airbnb-ts
[node-version-url]: https://badgen.net/npm/node/@hz-9/eslint-config-airbnb-ts
[last-commit-url]: https://badgen.net/github/last-commit/hz-9/lint-nx

## Installation

To install the `@hz-9/eslint-config-airbnb-ts` package, run the following command:

```bash
npm install @hz-9/eslint-config-airbnb-ts --save-dev
```

## Usage

This package provides both **Legacy eslintrc** and **Flat config** formats.

### Legacy (eslintrc)

Add the following code to your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb-ts'
  ],
}
```

If you need to generate `parserServices`, set `parseOptions.project`:

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb-ts'
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
```

Available sub-path exports:

| Export | Description |
|--------|-------------|
| `@hz-9/eslint-config-airbnb-ts` (or `./index`) | airbnb-base + prettier + TS + hz-9 rules |
| `@hz-9/eslint-config-airbnb-ts/airbnb-ts` | airbnb-base + TS rules |
| `@hz-9/eslint-config-airbnb-ts/airbnb-prettier` | airbnb-base + prettier + TS rules |

### Flat Config (ESLint >= 9.x)

Add the following code to your `eslint.config.js` file:

```javascript
const airbnbTsConfig = require('@hz-9/eslint-config-airbnb-ts/flat')

module.exports = [
  ...airbnbTsConfig,
]
```

Available sub-path exports:

| Export | Description |
|--------|-------------|
| `@hz-9/eslint-config-airbnb-ts/flat` | airbnb-base + prettier + TS + hz-9 rules |
| `@hz-9/eslint-config-airbnb-ts/flat/airbnb-ts` | airbnb-base + TS rules |
| `@hz-9/eslint-config-airbnb-ts/flat/airbnb-prettier` | airbnb-base + prettier + TS rules |

After that, you can run the ESLint fix command to automatically fix linting issues:

```bash
eslint --fix .
```
