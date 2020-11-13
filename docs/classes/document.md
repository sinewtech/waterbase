**[waterbase](../README.md)**

> [Globals](../README.md) / Document

# Class: Document

## Hierarchy

- **Document**

## Implements

- [Documents](../interfaces/documents.md)

## Index

### Constructors

- [constructor](document.md#constructor)

### Properties

- [#client](document.md##client)
- [#collection](document.md##collection)
- [data](document.md#data)
- [id](document.md#id)

### Methods

- [delete](document.md#delete)
- [update](document.md#update)

## Constructors

### constructor

\+ **new Document**(`client`: [Client](client.md), `collection`: string, `id?`: string, `data?`: object): [Document](document.md)

_Defined in [helpers/Document.ts:11](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Document.ts#L11)_

#### Parameters:

| Name         | Type                | Default value |
| ------------ | ------------------- | ------------- |
| `client`     | [Client](client.md) | -             |
| `collection` | string              | -             |
| `id`         | string              | ""            |
| `data`       | object              | {}            |

**Returns:** [Document](document.md)

## Properties

### #client

• `Private` **#client**: [Client](client.md)

_Defined in [helpers/Document.ts:11](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Document.ts#L11)_

---

### #collection

• `Private` **#collection**: string = ""

_Defined in [helpers/Document.ts:9](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Document.ts#L9)_

---

### data

• **data**: object

_Implementation of [Documents](../interfaces/documents.md).[data](../interfaces/documents.md#data)_

_Defined in [helpers/Document.ts:7](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Document.ts#L7)_

---

### id

• **id**: string = ""

_Implementation of [Documents](../interfaces/documents.md).[id](../interfaces/documents.md#id)_

_Defined in [helpers/Document.ts:5](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Document.ts#L5)_

## Methods

### delete

▸ **delete**(): Promise\<unknown>

_Defined in [helpers/Document.ts:49](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Document.ts#L49)_

Deletes the selected doc

**Returns:** Promise\<unknown>

Promise<any>

---

### update

▸ **update**(`update`: object): Promise\<unknown>

_Defined in [helpers/Document.ts:27](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/Document.ts#L27)_

Updates the selected doc

object

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `update` | object |

**Returns:** Promise\<unknown>

Promise<any>
