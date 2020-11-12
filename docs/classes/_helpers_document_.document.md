**[waterbase](../README.md)**

> [Globals](../globals.md) / ["helpers/Document"](../modules/_helpers_document_.md) / Document

# Class: Document

## Hierarchy

- **Document**

## Implements

- [Documents](../interfaces/_models_documents_.documents.md)

## Index

### Constructors

- [constructor](_helpers_document_.document.md#constructor)

### Properties

- [#client](_helpers_document_.document.md##client)
- [#collection](_helpers_document_.document.md##collection)
- [data](_helpers_document_.document.md#data)
- [id](_helpers_document_.document.md#id)

### Methods

- [delete](_helpers_document_.document.md#delete)
- [update](_helpers_document_.document.md#update)

## Constructors

### constructor

\+ **new Document**(`client`: [Client](_client_.client.md), `collection`: string, `id?`: string, `data?`: object): [Document](_helpers_document_.document.md)

_Defined in [helpers/Document.ts:11](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Document.ts#L11)_

#### Parameters:

| Name         | Type                         | Default value |
| ------------ | ---------------------------- | ------------- |
| `client`     | [Client](_client_.client.md) | -             |
| `collection` | string                       | -             |
| `id`         | string                       | ""            |
| `data`       | object                       | {}            |

**Returns:** [Document](_helpers_document_.document.md)

## Properties

### #client

• `Private` **#client**: [Client](_client_.client.md)

_Defined in [helpers/Document.ts:11](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Document.ts#L11)_

---

### #collection

• `Private` **#collection**: string = ""

_Defined in [helpers/Document.ts:9](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Document.ts#L9)_

---

### data

• **data**: object

_Implementation of [Documents](../interfaces/_models_documents_.documents.md).[data](../interfaces/_models_documents_.documents.md#data)_

_Defined in [helpers/Document.ts:7](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Document.ts#L7)_

---

### id

• **id**: string = ""

_Implementation of [Documents](../interfaces/_models_documents_.documents.md).[id](../interfaces/_models_documents_.documents.md#id)_

_Defined in [helpers/Document.ts:5](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Document.ts#L5)_

## Methods

### delete

▸ **delete**(): Promise\<unknown>

_Defined in [helpers/Document.ts:49](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Document.ts#L49)_

Deletes the selected doc

**Returns:** Promise\<unknown>

Promise<any>

---

### update

▸ **update**(`update`: object): Promise\<unknown>

_Defined in [helpers/Document.ts:27](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/Document.ts#L27)_

Updates the selected doc

object

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `update` | object |

**Returns:** Promise\<unknown>

Promise<any>
