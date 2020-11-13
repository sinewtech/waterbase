**[waterbase](../README.md)**

> [Globals](../README.md) / Collection

# Class: Collection

## Hierarchy

- **Collection**

## Index

### Constructors

- [constructor](collection.md#constructor)

### Properties

- [#client](collection.md##client)
- [#name](collection.md##name)
- [#query](collection.md##query)
- [name](collection.md#name)

### Methods

- [add](collection.md#add)
- [doc](collection.md#doc)
- [get](collection.md#get)
- [where](collection.md#where)

## Constructors

### constructor

\+ **new Collection**(`client`: [Client](client.md), `name`: string): [Collection](collection.md)

_Defined in [helpers/Collection.ts:10](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L10)_

#### Parameters:

| Name     | Type                |
| -------- | ------------------- |
| `client` | [Client](client.md) |
| `name`   | string              |

**Returns:** [Collection](collection.md)

## Properties

### #client

• `Private` **#client**: [Client](client.md)

_Defined in [helpers/Collection.ts:8](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L8)_

---

### #name

• `Private` **#name**: string = ""

_Defined in [helpers/Collection.ts:6](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L6)_

---

### #query

• `Private` **#query**: object

_Defined in [helpers/Collection.ts:10](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L10)_

---

### name

• **name**: string

_Defined in [models/Collection.ts:2](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/models/Collection.ts#L2)_

## Methods

### add

▸ **add**(`doc`: object): Promise\<[Document](document.md)>

_Defined in [helpers/Collection.ts:41](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L41)_

Adds a single doc to the collection

#### Parameters:

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `doc` | object | object      |

**Returns:** Promise\<[Document](document.md)>

Promise<Document>

---

### doc

▸ **doc**(`id`: string): Promise\<[Document](document.md)>

_Defined in [helpers/Collection.ts:66](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L66)_

Gets a single doc of the collection

#### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| `id` | string | string      |

**Returns:** Promise\<[Document](document.md)>

Promise<Document>

---

### get

▸ **get**(): Promise\<QueriedDocs>

_Defined in [helpers/Collection.ts:95](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L95)_

Gets gets all the docs that the where got or all in general

**Returns:** Promise\<QueriedDocs>

Promise<QueriedDocs>

---

### where

▸ **where**(`query`: any): object

_Defined in [helpers/Collection.ts:24](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Collection.ts#L24)_

Assigns the query to be ready before getting the docs

#### Parameters:

| Name    | Type | Description |
| ------- | ---- | ----------- |
| `query` | any  | object      |

**Returns:** object

| Name  | Type                 |
| ----- | -------------------- |
| `get` | (Anonymous function) |

self
