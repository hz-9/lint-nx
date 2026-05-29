#!/bin/bash

# Publish all packages using Changesets
# Equivalent to the old: rush publish -a -p --target-branch master --add-commit-details --ignore-git-hooks

echo "Creating changeset versions..."
pnpm changeset version

echo "Installing updated lockfile..."
pnpm install --lockfile-only

echo "Building all packages..."
pnpm nx run-many --target=build --all

echo "Publishing packages to npm..."
pnpm changeset publish

echo "Done!"
