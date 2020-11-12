**[waterbase](../README.md)**

> [Globals](../globals.md) / ["helpers/User"](../modules/_helpers_user_.md) / User

# Class: User

## Hierarchy

- **User**

## Implements

- [Users](../interfaces/_models_users_.users.md)

## Index

### Constructors

- [constructor](_helpers_user_.user.md#constructor)

### Properties

- [#client](_helpers_user_.user.md##client)
- [#refreshToken](_helpers_user_.user.md##refreshtoken)
- [#token](_helpers_user_.user.md##token)
- [email](_helpers_user_.user.md#email)
- [id](_helpers_user_.user.md#id)
- [profile](_helpers_user_.user.md#profile)

### Methods

- [deleteAccount](_helpers_user_.user.md#deleteaccount)
- [renewToken](_helpers_user_.user.md#renewtoken)

## Constructors

### constructor

\+ **new User**(`client`: [Client](_client_.client.md), `token`: string): [User](_helpers_user_.user.md)

_Defined in [helpers/User.ts:15](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L15)_

#### Parameters:

| Name     | Type                         |
| -------- | ---------------------------- |
| `client` | [Client](_client_.client.md) |
| `token`  | string                       |

**Returns:** [User](_helpers_user_.user.md)

## Properties

### #client

• `Private` **#client**: [Client](_client_.client.md)

_Defined in [helpers/User.ts:15](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L15)_

---

### #refreshToken

• `Private` **#refreshToken**: string = ""

_Defined in [helpers/User.ts:14](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L14)_

---

### #token

• `Private` **#token**: string = ""

_Defined in [helpers/User.ts:13](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L13)_

---

### email

• **email**: string = ""

_Implementation of [Users](../interfaces/_models_users_.users.md).[email](../interfaces/_models_users_.users.md#email)_

_Defined in [helpers/User.ts:10](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L10)_

---

### id

• **id**: string = ""

_Implementation of [Users](../interfaces/_models_users_.users.md).[id](../interfaces/_models_users_.users.md#id)_

_Defined in [helpers/User.ts:11](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L11)_

---

### profile

• `Optional` **profile**: undefined \| object

_Implementation of [Users](../interfaces/_models_users_.users.md).[profile](../interfaces/_models_users_.users.md#profile)_

_Defined in [helpers/User.ts:12](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L12)_

## Methods

### deleteAccount

▸ **deleteAccount**(): Promise\<unknown>

_Defined in [helpers/User.ts:65](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L65)_

Will delete the account from waterbase

**Returns:** Promise\<unknown>

Promise<any>

---

### renewToken

▸ **renewToken**(): Promise\<unknown>

_Defined in [helpers/User.ts:33](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/helpers/User.ts#L33)_

Refresh the jwt token

**Returns:** Promise\<unknown>

Promise<any>
