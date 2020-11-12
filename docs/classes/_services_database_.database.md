**[waterbase](../README.md)**

> [Globals](../globals.md) / ["services/Database"](../modules/_services_database_.md) / Database

# Class: Database

## Hierarchy

- [Service](_service_.service.md)

  ↳ **Database**

## Index

### Constructors

- [constructor](_services_database_.database.md#constructor)

### Properties

- [client](_services_database_.database.md#client)

### Methods

- [collection](_services_database_.database.md#collection)

## Constructors

### constructor

\+ **new Database**(`client`: [Client](_client_.client.md)): [Database](_services_database_.database.md)

_Inherited from [Service](_service_.service.md).[constructor](_service_.service.md#constructor)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Service.ts#L4)_

#### Parameters:

| Name     | Type                         |
| -------- | ---------------------------- |
| `client` | [Client](_client_.client.md) |

**Returns:** [Database](_services_database_.database.md)

## Properties

### client

• **client**: [Client](_client_.client.md)

_Inherited from [Service](_service_.service.md).[client](_service_.service.md#client)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Service.ts#L4)_

## Methods

### collection

▸ **collection**(`name`: string): [Collection](_helpers_collection_.collection.md)

_Defined in [services/Database.ts:5](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/services/Database.ts#L5)_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `name` | string |

**Returns:** [Collection](_helpers_collection_.collection.md)
