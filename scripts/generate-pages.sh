#!/bin/bash

# Generate documentation pages: sync package docs, then build the VuePress docs site.

set -e

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PACKAGES_DIR="$ROOT_DIR/packages"

echo ""
echo "=== 0. Preparation phase ==="
# pnpm run format
# pnpm run lint
# pnpm run build

echo ""
echo "=== 0. Clearing history files ==="
rm -rf ./docs/guide
rm -rf ./docs/changelog

echo ""
echo "=== 1. Syncing guide files from packages ==="
for pkg_dir in "$PACKAGES_DIR"/*/; do
  pkg_name=$(basename "$pkg_dir")
  src="$pkg_dir/docs/guide"
  dest="$ROOT_DIR/docs/guide/$pkg_name"

  if [ -d "$src" ]; then
    mkdir -p "$dest"
    cp -r "$src/"* "$dest/"
    echo "  $pkg_name: synced to docs/guide/$pkg_name"
  else
    echo "  $pkg_name: no docs/guide, skipped"
  fi
done

echo ""
echo "=== 2. Syncing changelog files from packages ==="
for pkg_dir in "$PACKAGES_DIR"/*/; do
  pkg_name=$(basename "$pkg_dir")
  src="$pkg_dir/CHANGELOG.md"
  dest="$ROOT_DIR/docs/changelog/$pkg_name/README.md"

  if [ -f "$src" ]; then
    mkdir -p "$(dirname "$dest")"
    cp "$src" "$dest"
    echo "  $pkg_name: synced to docs/changelog/$pkg_name/README.md"
  else
    echo "  $pkg_name: no CHANGELOG.md, skipped"
  fi
done

echo ""
echo "=== 3. Building VuePress docs with docs-build ==="
npx @hz-9/docs-build -c docs-build.config.json
