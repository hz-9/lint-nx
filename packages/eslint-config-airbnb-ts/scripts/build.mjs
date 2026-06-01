#!/usr/bin/env node

import { build } from 'esbuild'
import { cpSync, rmSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'

const SRC = 'src'
const DIST = 'lib'

rmSync(DIST, { recursive: true, force: true })

cpSync(SRC, DIST, { recursive: true })
console.log('✓ CJS: src/ → lib/')

// 插件：在构建时将 require.resolve 回调替换为构建时解析的绝对路径
const resolvePlugin = {
  name: 'resolve-require',
  setup(build) {
    build.onLoad({ filter: /\.js$/ }, (args) => {
      const source = readFileSync(args.path, 'utf8')
      let replaced
      if (source.includes('.map(require.resolve)')) {
        replaced = source.replace(
          /(\[\s*(?:(['"])((?:(?!\2).)+)\2\s*,?\s*)+\])\s*\.map\(require\.resolve\)/g,
          (match, arrayStr) => {
            return arrayStr.replace(
              /(['"])((?:(?!\1).)+)\1/g,
              (pathMatch, quote, relPath) => {
                if (relPath.startsWith('../')) {
                  const absPath = resolve(dirname(args.path), relPath)
                  return `${quote}${absPath}${quote}`
                }
                return pathMatch
              }
            )
          }
        )
      } else {
        replaced = source
      }
      return { contents: replaced, loader: 'js' }
    })
  }
}

const entries = [
  'index.js',
  'profile/index.js',
  'profile/airbnb-ts.js',
  'profile/airbnb-prettier.js',
  'profile/flat/index.js',
  'profile/flat/airbnb-ts.js',
  'profile/flat/airbnb-prettier.js',
  'airbnb-ts-rules/best-practices.js',
  'airbnb-ts-rules/errors.js',
  'airbnb-ts-rules/es6.js',
  'airbnb-ts-rules/imports.js',
  'airbnb-ts-rules/node.js',
  'airbnb-ts-rules/strict.js',
  'airbnb-ts-rules/style.js',
  'airbnb-ts-rules/ts-off.js',
  'airbnb-ts-rules/variables.js',
  'rules/best-practices.js',
  'rules/errors.js',
  'rules/es6.js',
  'rules/imports.js',
  'rules/node.js',
  'rules/strict.js',
  'rules/style.js',
  'rules/variables.js',
  'plugins.js',
  'prettier-rules/index.js',
].map(f => `${SRC}/${f}`)

await build({
  entryPoints: entries,
  outdir: DIST,
  format: 'esm',
  target: 'node18',
  platform: 'node',
  outExtension: { '.js': '.mjs' },
  bundle: true,
  plugins: [resolvePlugin],
  external: [
    'eslint',
  ],
})
console.log('✓ ESM: esbuild bundle → .mjs')
