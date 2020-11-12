**[waterbase](../README.md)**

> [Globals](../README.md) / Database

# Class: Database

## Hierarchy

- [Service](service.md)

  ↳ **Database**

## Index

### Constructors

- [constructor](database.md#constructor)

### Properties

- [client](database.md#client)

### Methods

- [collection](database.md#collection)

## Constructors

### constructor

\+ **new Database**(`client`: [Client](client.md)): [Database](database.md)

_Inherited from [Service](service.md).[constructor](service.md#constructor)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/Service.ts#L4)_

#### Parameters:

| Name     | Type                |
| -------- | ------------------- |
| `client` | [Client](client.md) |

**Returns:** [Database](database.md)

## Properties

### client

• **client**: [Client](client.md)

_Inherited from [Service](service.md).[client](service.md#client)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/Service.ts#L4)_

## Methods

### collection

▸ **collection**(`name`: string): [Collection](collection.md)

_Defined in [services/Database.ts:5](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/services/Database.ts#L5)_

#### Parameters:

| Name   | Type   |
| ------ | ------ |
| `name` | string |

**Returns:** [Collection](collection.md)
