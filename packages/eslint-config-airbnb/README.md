# @hz-9/eslint-config-airbnb

A [eslint] config for 'hz-9' (JavaScript).

![NPM Version][npm-version-url] ![NPM License][npm-license-url] ![NPM Downloads][npm-downloads-url]
<br /> ![Node Version][node-version-url] ![Last Commit][last-commit-url]

[eslint]: https://eslint.org/
[npm-version-url]: https://badgen.net/npm/v/@hz-9/eslint-config-airbnb
[npm-license-url]: https://badgen.net/npm/license/@hz-9/eslint-config-airbnb
[npm-downloads-url]: https://badgen.net/npm/dt/@hz-9/eslint-config-airbnb
[node-version-url]: https://badgen.net/npm/node/@hz-9/eslint-config-airbnb
[last-commit-url]: https://badgen.net/github/last-commit/hz-9/lint-nx

## Installation

To install the `@hz-9/eslint-config-airbnb` package, run the following command:

```bash
npm install @hz-9/eslint-config-airbnb --save-dev
```

## Usage

This package provides both **Legacy eslintrc** and **Flat config** formats.

### Legacy (eslintrc)

Add the following code to your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    '@hz-9/eslint-config-airbnb'
  ],
}
```

Available sub-path exports:

| Export | Description |
|--------|-------------|
| `@hz-9/eslint-config-airbnb` (or `./index`) | airbnb-base + hz-9 rules |
| `@hz-9/eslint-config-airbnb/airbnb-base` | airbnb-base rules only |
| `@hz-9/eslint-config-airbnb/airbnb-prettier` | airbnb-base + prettier rules |

### Flat Config (ESLint >= 9.x)

Add the following code to your `eslint.config.js` file:

```javascript
const airbnbConfig = require('@hz-9/eslint-config-airbnb/flat')

module.exports = [
  ...airbnbConfig,
]
```

Available sub-path exports:

| Export | Description |
|--------|-------------|
| `@hz-9/eslint-config-airbnb/flat` | airbnb-base + prettier + hz-9 rules |
| `@hz-9/eslint-config-airbnb/flat/airbnb-base` | airbnb-base rules only |
| `@hz-9/eslint-config-airbnb/flat/airbnb-prettier` | airbnb-base + prettier rules |

After that, you can run the ESLint fix command to automatically fix linting issues:

```bash
eslint --fix .
```
