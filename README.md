# :gear: `setup-bnd` ![](https://github.com/pkriens/setup-bnd/workflows/Tests/badge.svg)
> A Github Action to install bnd

## About

This action will install the bnd jar so that it becomes available in the shell.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `bnd` CLI on the runner environment. This action requires the installation of java

## Usage

Setup the `bnd` CLI:

```yaml
steps:
- uses: github-developer/setup-gh@v1
```

A specific version of the `gh` CLI can be installed:

```yaml
steps:
- uses: bndtools/setup-bnd@v1
  with:
    version:
      1.1.0
```

## Inputs
The actions supports the following inputs:

- `version`: The version of `gh` to install, defaulting to `1.2.0`

