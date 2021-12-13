# :gear: `setup-bnd` ![](https://github.com/pkriens/setup-bnd/workflows/Tests/badge.svg)
> A Github Action to install jpm

## About

This action will install the jpm so that it becomes available in the shell. jpm can be used then to install
commands from maven central or other maven repositories.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `jpm` CLI on the runner environment. This action requires the installation of java.

## Usage

Setup the `bnd` CLI:

```yaml
steps:
- uses: aQute-os/setup-jpm@v1
```

## Example

The following example installs jpm and then runs jython

      name: release

      on:
        push:
        
      jobs:
        build:
          name: build on OpenJDK Linux
          runs-on: ubuntu-latest
          steps:
            - name: Git Checkout
              uses: actions/checkout@v1
            - name: Set up Java
              uses: actions/setup-java@v1
              with:
                java-version: 1.8
            - name:  install jpm
              uses: aQute-os/setup-jpm@v1.0.0
            - name: Run jython
              shell: bash
              run: |
                  jpm install -n jython org.python:jython-standalone
                  jython

