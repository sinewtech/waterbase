**[waterbase](../README.md)**

> [Globals](../README.md) / File

# Class: File

## Hierarchy

- **File**

## Implements

- [Files](../interfaces/files.md)

## Index

### Constructors

- [constructor](file.md#constructor)

### Properties

- [#client](file.md##client)
- [path](file.md#path)

### Methods

- [delete](file.md#delete)
- [getDownloadUrl](file.md#getdownloadurl)
- [update](file.md#update)
- [upload](file.md#upload)

## Constructors

### constructor

\+ **new File**(`client`: [Client](client.md), `path`: string): [File](file.md)

_Defined in [helpers/File.ts:8](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/File.ts#L8)_

#### Parameters:

| Name     | Type                |
| -------- | ------------------- |
| `client` | [Client](client.md) |
| `path`   | string              |

**Returns:** [File](file.md)

## Properties

### #client

• `Private` **#client**: [Client](client.md)

_Defined in [helpers/File.ts:8](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/File.ts#L8)_

---

### path

• **path**: string = ""

_Implementation of [Files](../interfaces/files.md).[path](../interfaces/files.md#path)_

_Defined in [helpers/File.ts:6](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/File.ts#L6)_

## Methods

### delete

▸ **delete**(): Promise\<unknown>

_Defined in [helpers/File.ts:20](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/File.ts#L20)_

Delete the file

**Returns:** Promise\<unknown>

Promise<any>

---

### getDownloadUrl

▸ **getDownloadUrl**(): Promise\<string>

_Defined in [helpers/File.ts:47](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/File.ts#L47)_

Gets a download url for the file

**Returns:** Promise\<string>

string

---

### update

▸ **update**(`file`: Buffer, `newPath?`: undefined \| string): Promise\<object>

_Defined in [helpers/File.ts:108](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/File.ts#L108)_

Updates the file with a new path or just the file

#### Parameters:

| Name       | Type                | Description |
| ---------- | ------------------- | ----------- |
| `file`     | Buffer              | Buffer      |
| `newPath?` | undefined \| string | -           |

**Returns:** Promise\<object>

Promise<object>

---

### upload

▸ **upload**(`file`: Buffer): Promise\<object>

_Defined in [helpers/File.ts:77](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/helpers/File.ts#L77)_

Uploads the param to the file path

#### Parameters:

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| `file` | Buffer | Buffer      |

**Returns:** Promise\<object>

Promise<object>
