**[waterbase](../README.md)**

> [Globals](../README.md) / Client

# Class: Client

## Hierarchy

- **Client**

## Index

### Constructors

- [constructor](client.md#constructor)

### Properties

- [endpoint](client.md#endpoint)
- [headers](client.md#headers)

### Methods

- [addHeader](client.md#addheader)
- [call](client.md#call)
- [setEndpoint](client.md#setendpoint)
- [setKey](client.md#setkey)

## Constructors

### constructor

\+ **new Client**(`config`: [WaterbaseConfig](../interfaces/waterbaseconfig.md)): [Client](client.md)

_Defined in [Client.ts:7](https://github.com/sinewtech/waterbase/blob/5854550/lib/Client.ts#L7)_

#### Parameters:

| Name     | Type                                                |
| -------- | --------------------------------------------------- |
| `config` | [WaterbaseConfig](../interfaces/waterbaseconfig.md) |

**Returns:** [Client](client.md)

## Properties

### endpoint

• **endpoint**: String = ""

_Defined in [Client.ts:5](https://github.com/sinewtech/waterbase/blob/5854550/lib/Client.ts#L5)_

---

### headers

• **headers**: any

_Defined in [Client.ts:7](https://github.com/sinewtech/waterbase/blob/5854550/lib/Client.ts#L7)_

## Methods

### addHeader

▸ **addHeader**(`key`: string, `value`: string): this

_Defined in [Client.ts:49](https://github.com/sinewtech/waterbase/blob/5854550/lib/Client.ts#L49)_

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

_Defined in [Client.ts:65](https://github.com/sinewtech/waterbase/blob/5854550/lib/Client.ts#L65)_

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

_Defined in [Client.ts:36](https://github.com/sinewtech/waterbase/blob/5854550/lib/Client.ts#L36)_

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

_Defined in [Client.ts:24](https://github.com/sinewtech/waterbase/blob/5854550/lib/Client.ts#L24)_

Set secret key

#### Parameters:

| Name    | Type   |
| ------- | ------ |
| `value` | string |

**Returns:** this

self
