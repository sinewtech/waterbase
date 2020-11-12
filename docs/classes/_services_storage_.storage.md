**[waterbase](../README.md)**

> [Globals](../globals.md) / ["services/Storage"](../modules/_services_storage_.md) / Storage

# Class: Storage

## Hierarchy

- [Service](_service_.service.md)

  ↳ **Storage**

## Index

### Constructors

- [constructor](_services_storage_.storage.md#constructor)

### Properties

- [client](_services_storage_.storage.md#client)

### Methods

- [file](_services_storage_.storage.md#file)

## Constructors

### constructor

\+ **new Storage**(`client`: [Client](_client_.client.md)): [Storage](_services_storage_.storage.md)

_Inherited from [Service](_service_.service.md).[constructor](_service_.service.md#constructor)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Service.ts#L4)_

#### Parameters:

| Name     | Type                         |
| -------- | ---------------------------- |
| `client` | [Client](_client_.client.md) |

**Returns:** [Storage](_services_storage_.storage.md)

## Properties

### client

• **client**: [Client](_client_.client.md)

_Inherited from [Service](_service_.service.md).[client](_service_.service.md#client)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Service.ts#L4)_

## Methods

### file

▸ **file**(`path`: string): [File](_helpers_file_.file.md)

_Defined in [services/Storage.ts:5](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/services/Storage.ts#L5)_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `path` | string |

**Returns:** [File](_helpers_file_.file.md)
