import * as core from '@actions/core'

async function run(): Promise<void> {
  const increments = ['major', 'minor', 'patch']

  try {
    const version: string = core.getInput('version', {required: true})
    const incrementType: string = core.getInput('increment_type') || 'patch'
    const increment: number = parseInt(core.getInput('increment') || '1')

    const incrementTypeIdx = increments.indexOf(incrementType.toLowerCase())

    if (incrementTypeIdx < 0) {
      core.setFailed(
        `increment type needs to be one of  ${increments.join(',')}`
      )
      return
    }

    const components = version.split('-')
    const versionParts = components[0].split('.')

    if (versionParts.length < incrementTypeIdx + 1) {
      core.setFailed(
        `version ${version} doesn't contain ${incrementType} component`
      )
      return
    }

    versionParts[incrementTypeIdx] = (
      parseInt(versionParts[incrementTypeIdx]) + increment
    ).toString()

    core.setOutput(
      'version',
      versionParts.join('.') +
        (components.length > 1 ? `-${components[1]}` : '')
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
