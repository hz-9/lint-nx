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
  'profile/airbnb-base.js',
  'profile/airbnb-prettier.js',
  'profile/flat.js',
  'profile/flat-airbnb-base.js',
  'profile/flat-airbnb-prettier.js',
  'airbnb-base-rules/best-practices.js',
  'airbnb-base-rules/errors.js',
  'airbnb-base-rules/es6.js',
  'airbnb-base-rules/imports.js',
  'airbnb-base-rules/node.js',
  'airbnb-base-rules/strict.js',
  'airbnb-base-rules/style.js',
  'airbnb-base-rules/variables.js',
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
