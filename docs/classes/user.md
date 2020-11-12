**[waterbase](../README.md)**

> [Globals](../README.md) / User

# Class: User

## Hierarchy

- **User**

## Implements

- [Users](../interfaces/users.md)

## Index

### Constructors

- [constructor](user.md#constructor)

### Properties

- [#client](user.md##client)
- [#refreshToken](user.md##refreshtoken)
- [#token](user.md##token)
- [email](user.md#email)
- [id](user.md#id)
- [profile](user.md#profile)

### Methods

- [deleteAccount](user.md#deleteaccount)
- [renewToken](user.md#renewtoken)

## Constructors

### constructor

\+ **new User**(`client`: [Client](client.md), `token`: string): [User](user.md)

_Defined in [helpers/User.ts:15](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L15)_

#### Parameters:

| Name     | Type                |
| -------- | ------------------- |
| `client` | [Client](client.md) |
| `token`  | string              |

**Returns:** [User](user.md)

## Properties

### #client

• `Private` **#client**: [Client](client.md)

_Defined in [helpers/User.ts:15](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L15)_

---

### #refreshToken

• `Private` **#refreshToken**: string = ""

_Defined in [helpers/User.ts:14](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L14)_

---

### #token

• `Private` **#token**: string = ""

_Defined in [helpers/User.ts:13](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L13)_

---

### email

• **email**: string = ""

_Implementation of [Users](../interfaces/users.md).[email](../interfaces/users.md#email)_

_Defined in [helpers/User.ts:10](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L10)_

---

### id

• **id**: string = ""

_Implementation of [Users](../interfaces/users.md).[id](../interfaces/users.md#id)_

_Defined in [helpers/User.ts:11](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L11)_

---

### profile

• `Optional` **profile**: undefined \| object

_Implementation of [Users](../interfaces/users.md).[profile](../interfaces/users.md#profile)_

_Defined in [helpers/User.ts:12](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L12)_

## Methods

### deleteAccount

▸ **deleteAccount**(): Promise\<unknown>

_Defined in [helpers/User.ts:65](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L65)_

Will delete the account from waterbase

**Returns:** Promise\<unknown>

Promise<any>

---

### renewToken

▸ **renewToken**(): Promise\<unknown>

_Defined in [helpers/User.ts:33](https://github.com/sinewtech/waterbase/blob/5854550/lib/helpers/User.ts#L33)_

Refresh the jwt token

**Returns:** Promise\<unknown>

Promise<any>
