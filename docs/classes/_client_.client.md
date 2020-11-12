**[waterbase](../README.md)**

> [Globals](../globals.md) / ["Client"](../modules/_client_.md) / Client

# Class: Client

## Hierarchy

- **Client**

## Index

### Constructors

- [constructor](_client_.client.md#constructor)

### Properties

- [endpoint](_client_.client.md#endpoint)
- [headers](_client_.client.md#headers)

### Methods

- [addHeader](_client_.client.md#addheader)
- [call](_client_.client.md#call)
- [setEndpoint](_client_.client.md#setendpoint)
- [setKey](_client_.client.md#setkey)

## Constructors

### constructor

\+ **new Client**(`config`: [WaterbaseConfig](../interfaces/_models_config_.waterbaseconfig.md)): [Client](_client_.client.md)

_Defined in [Client.ts:7](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Client.ts#L7)_

#### Parameters:

| Name     | Type                                                                |
| -------- | ------------------------------------------------------------------- |
| `config` | [WaterbaseConfig](../interfaces/_models_config_.waterbaseconfig.md) |

**Returns:** [Client](_client_.client.md)

## Properties

### endpoint

• **endpoint**: String = ""

_Defined in [Client.ts:5](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Client.ts#L5)_

---

### headers

• **headers**: any

_Defined in [Client.ts:7](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Client.ts#L7)_

## Methods

### addHeader

▸ **addHeader**(`key`: string, `value`: string): this

_Defined in [Client.ts:49](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Client.ts#L49)_

Adds a header for the http request

#### Parameters:

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `key`   | string | string      |
| `value` | string | string      |

**Returns:** this

---

### call

▸ **call**(`method`: string, `path?`: string, `headers?`: object, `params?`: {}): Promise\<any>

_Defined in [Client.ts:65](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Client.ts#L65)_

Makes the call to the server a lot easier

#### Parameters:

| Name      | Type   | Default value | Description |
| --------- | ------ | ------------- | ----------- |
| `method`  | string | -             | string      |
| `path`    | string | ""            | string      |
| `headers` | object | {}            | object      |
| `params`  | {}     | {}            | object      |

**Returns:** Promise\<any>

---

### setEndpoint

▸ **setEndpoint**(`endpoint`: string): this

_Defined in [Client.ts:36](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Client.ts#L36)_

Set the endpoint

#### Parameters:

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `endpoint` | string |             |

**Returns:** this

this

---

### setKey

▸ **setKey**(`value`: string): this

_Defined in [Client.ts:24](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Client.ts#L24)_

Set secret key

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| `value` | string |

**Returns:** this

self
