# Increment Version Action

Sample action that implements a version number incrementor.

Version can be in the format `MAJOR.MINOR.PATCH-PRERELEASE`

It's a little more lenient than semver since the components can be ommited (eg: MAJOR.MINOR)

You can increment major, minor or patch

Outputs a `version` variable

usage:

```yaml
- uses: tspascoal/increment-version-action@v2
  id: increment
  with:
    version: 2.0-alpha
    increment_type: major # major, minor or patch (it will thrown an error if the component type isn't present)
    increment: 2 # optional. Default value is 1

- run: echo new version ${{ steps.increment.outputs.version }}
```

> Warning this is just a sample. Use at your own risk :)

> Note: Use v1 for node16 and v2 for node20 (recommended unless in an old runner version that doesn't support node20 yet).