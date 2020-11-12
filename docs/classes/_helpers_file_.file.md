**[waterbase](../README.md)**

> [Globals](../globals.md) / ["helpers/File"](../modules/_helpers_file_.md) / File

# Class: File

## Hierarchy

- **File**

## Implements

- [Files](../interfaces/_models_files_.files.md)

## Index

### Constructors

- [constructor](_helpers_file_.file.md#constructor)

### Properties

- [#client](_helpers_file_.file.md##client)
- [path](_helpers_file_.file.md#path)

### Methods

- [delete](_helpers_file_.file.md#delete)
- [getDownloadUrl](_helpers_file_.file.md#getdownloadurl)
- [update](_helpers_file_.file.md#update)
- [upload](_helpers_file_.file.md#upload)

## Constructors

### constructor

\+ **new File**(`client`: [Client](_client_.client.md), `path`: string): [File](_helpers_file_.file.md)

_Defined in [helpers/File.ts:8](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/File.ts#L8)_

#### Parameters:

| Name     | Type                         |
| -------- | ---------------------------- |
| `client` | [Client](_client_.client.md) |
| `path`   | string                       |

**Returns:** [File](_helpers_file_.file.md)

## Properties

### #client

• `Private` **#client**: [Client](_client_.client.md)

_Defined in [helpers/File.ts:8](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/File.ts#L8)_

---

### path

• **path**: string = ""

_Implementation of [Files](../interfaces/_models_files_.files.md).[path](../interfaces/_models_files_.files.md#path)_

_Defined in [helpers/File.ts:6](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/File.ts#L6)_

## Methods

### delete

▸ **delete**(): Promise\<unknown>

_Defined in [helpers/File.ts:20](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/File.ts#L20)_

Delete the file

**Returns:** Promise\<unknown>

Promise<any>

---

### getDownloadUrl

▸ **getDownloadUrl**(): Promise\<string>

_Defined in [helpers/File.ts:47](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/File.ts#L47)_

Gets a download url for the file

**Returns:** Promise\<string>

string

---

### update

▸ **update**(`file`: Buffer, `newPath?`: undefined \| string): Promise\<object>

_Defined in [helpers/File.ts:108](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/File.ts#L108)_

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

_Defined in [helpers/File.ts:77](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/File.ts#L77)_

Uploads the param to the file path

#### Parameters:

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| `file` | Buffer | Buffer      |

**Returns:** Promise\<object>

Promise<object>
