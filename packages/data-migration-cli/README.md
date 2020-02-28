# data-migration-cli

A migration utility for AWS resources

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/data-migration-cli.svg)](https://npmjs.org/package/data-migration-cli)
[![Codecov](https://codecov.io/gh/drg-adaptive/data-migration/branch/master/graph/badge.svg)](https://codecov.io/gh/drg-adaptive/data-migration)
[![Downloads/week](https://img.shields.io/npm/dw/data-migration-cli.svg)](https://npmjs.org/package/data-migration-cli)
[![License](https://img.shields.io/npm/l/data-migration-cli.svg)](https://github.com/drg-adaptive/data-migration/blob/master/package.json)

<!-- toc -->
* [data-migration-cli](#data-migration-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g data-migration-cli
$ migrate COMMAND
running command...
$ migrate (-v|--version|version)
data-migration-cli/1.0.18 darwin-x64 node-v12.13.1
$ migrate --help [COMMAND]
USAGE
  $ migrate COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`migrate down [CONFIG]`](#migrate-down-config)
* [`migrate help [COMMAND]`](#migrate-help-command)
* [`migrate init`](#migrate-init)
* [`migrate new NAME`](#migrate-new-name)
* [`migrate up [CONFIG]`](#migrate-up-config)

## `migrate down [CONFIG]`

run all down migration scripts

```
USAGE
  $ migrate down [CONFIG]

OPTIONS
  -h, --help     show CLI help
  --stage=stage  Stage that will be used when loading config values
```

_See code: [src/commands/down.ts](https://github.com/drg-adaptive/data-migration/blob/v1.0.18/src/commands/down.ts)_

## `migrate help [COMMAND]`

display help for migrate

```
USAGE
  $ migrate help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `migrate init`

Creates a basic configuration in the current directory

```
USAGE
  $ migrate init

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/init.ts](https://github.com/drg-adaptive/data-migration/blob/v1.0.18/src/commands/init.ts)_

## `migrate new NAME`

Create a new migration script

```
USAGE
  $ migrate new NAME

OPTIONS
  -h, --help       show CLI help
  --config=config  [default: /Users/bforce/repos/data-migration/packages/data-migration-cli/.swallow.js]
```

_See code: [src/commands/new.ts](https://github.com/drg-adaptive/data-migration/blob/v1.0.18/src/commands/new.ts)_

## `migrate up [CONFIG]`

run all migration scripts

```
USAGE
  $ migrate up [CONFIG]

OPTIONS
  -h, --help     show CLI help
  --stage=stage  Stage that will be used when loading config values
```

_See code: [src/commands/up.ts](https://github.com/drg-adaptive/data-migration/blob/v1.0.18/src/commands/up.ts)_
<!-- commandsstop -->