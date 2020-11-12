**[waterbase](../README.md)**

> [Globals](../globals.md) / ["helpers/Collection"](../modules/_helpers_collection_.md) / Collection

# Class: Collection

## Hierarchy

- **Collection**

## Index

### Constructors

- [constructor](_helpers_collection_.collection.md#constructor)

### Properties

- [#client](_helpers_collection_.collection.md##client)
- [#name](_helpers_collection_.collection.md##name)
- [#query](_helpers_collection_.collection.md##query)

### Methods

- [add](_helpers_collection_.collection.md#add)
- [doc](_helpers_collection_.collection.md#doc)
- [get](_helpers_collection_.collection.md#get)
- [where](_helpers_collection_.collection.md#where)

## Constructors

### constructor

\+ **new Collection**(`client`: [Client](_client_.client.md), `name`: string): [Collection](_helpers_collection_.collection.md)

_Defined in [helpers/Collection.ts:10](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L10)_

#### Parameters:

| Name     | Type                         |
| -------- | ---------------------------- |
| `client` | [Client](_client_.client.md) |
| `name`   | string                       |

**Returns:** [Collection](_helpers_collection_.collection.md)

## Properties

### #client

• `Private` **#client**: [Client](_client_.client.md)

_Defined in [helpers/Collection.ts:8](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L8)_

---

### #name

• `Private` **#name**: string = ""

_Defined in [helpers/Collection.ts:6](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L6)_

---

### #query

• `Private` **#query**: object

_Defined in [helpers/Collection.ts:10](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L10)_

## Methods

### add

▸ **add**(`doc`: object): Promise\<[Document](_helpers_document_.document.md)>

_Defined in [helpers/Collection.ts:41](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L41)_

Adds a single doc to the collection

#### Parameters:

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| `doc` | object | object      |

**Returns:** Promise\<[Document](_helpers_document_.document.md)>

Promise<Document>

---

### doc

▸ **doc**(`id`: string): Promise\<[Document](_helpers_document_.document.md)>

_Defined in [helpers/Collection.ts:66](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L66)_

Gets a single doc of the collection

#### Parameters:

| Name | Type   | Description |
| ---- | ------ | ----------- |
| `id` | string | string      |

**Returns:** Promise\<[Document](_helpers_document_.document.md)>

Promise<Document>

---

### get

▸ **get**(): Promise\<[QueriedDocs](_helpers_querieddocs_.querieddocs.md)>

_Defined in [helpers/Collection.ts:95](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L95)_

Gets gets all the docs that the where got or all in general

**Returns:** Promise\<[QueriedDocs](_helpers_querieddocs_.querieddocs.md)>

Promise<QueriedDocs>

---

### where

▸ **where**(`query`: any): object

_Defined in [helpers/Collection.ts:24](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Collection.ts#L24)_

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
