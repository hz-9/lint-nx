/**
 * Local changeset changelog generator: same shape as `@changesets/changelog-git`
 * but without the leading commit hash.
 */

async function getReleaseLine(changeset) {
  const lines = changeset.summary.split('\n').map((l) => l.trimEnd())
  const [firstLine, ...rest] = lines

  // If the summary is already a markdown bullet list, return it as-is so we
  // do not produce ugly `- - foo` double-bullet headings.
  if (/^\s*-\s+/.test(firstLine)) {
    return lines.join('\n')
  }

  let line = `- ${firstLine}`
  if (rest.length > 0) {
    line += `\n${rest.map((l) => `  ${l}`).join('\n')}`
  }
  return line
}

async function getDependencyReleaseLine(_changesets, dependenciesUpdated) {
  if (dependenciesUpdated.length === 0) return ''

  const updatedList = dependenciesUpdated.map(
    (dep) => `  - ${dep.name}@${dep.newVersion}`,
  )
  return ['- Updated dependencies', ...updatedList].join('\n')
}

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
  default: { getReleaseLine, getDependencyReleaseLine },
}
