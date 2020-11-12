**[waterbase](../README.md)**

> [Globals](../globals.md) / ["services/Auth"](../modules/_services_auth_.md) / Auth

# Class: Auth

## Hierarchy

- [Service](_service_.service.md)

  ↳ **Auth**

## Index

### Constructors

- [constructor](_services_auth_.auth.md#constructor)

### Properties

- [client](_services_auth_.auth.md#client)

### Methods

- [CreateAccount](_services_auth_.auth.md#createaccount)
- [getCurrentUser](_services_auth_.auth.md#getcurrentuser)
- [loginWithEmailAndPassword](_services_auth_.auth.md#loginwithemailandpassword)
- [signOut](_services_auth_.auth.md#signout)

## Constructors

### constructor

\+ **new Auth**(`client`: [Client](_client_.client.md)): [Auth](_services_auth_.auth.md)

_Inherited from [Service](_service_.service.md).[constructor](_service_.service.md#constructor)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Service.ts#L4)_

#### Parameters:

| Name     | Type                         |
| -------- | ---------------------------- |
| `client` | [Client](_client_.client.md) |

**Returns:** [Auth](_services_auth_.auth.md)

## Properties

### client

• **client**: [Client](_client_.client.md)

_Inherited from [Service](_service_.service.md).[client](_service_.service.md#client)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/Service.ts#L4)_

## Methods

### CreateAccount

▸ **CreateAccount**(`email`: string, `password`: string, `profile?`: undefined \| object): Promise\<[User](_helpers_user_.user.md)>

_Defined in [services/Auth.ts:22](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/services/Auth.ts#L22)_

Will create the account and create a JWT and store it (login)

#### Parameters:

| Name       | Type                | Description |
| ---------- | ------------------- | ----------- |
| `email`    | string              | string      |
| `password` | string              | string      |
| `profile?` | undefined \| object | object      |

**Returns:** Promise\<[User](_helpers_user_.user.md)>

Promise<User>

---

### getCurrentUser

▸ **getCurrentUser**(): Promise\<[User](_helpers_user_.user.md)>

_Defined in [services/Auth.ts:78](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/services/Auth.ts#L78)_

Will decode the current JWT and return it

**Returns:** Promise\<[User](_helpers_user_.user.md)>

Promise<User>

---

### loginWithEmailAndPassword

▸ **loginWithEmailAndPassword**(`email`: string, `password`: string): Promise\<[User](_helpers_user_.user.md)>

_Defined in [services/Auth.ts:52](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/services/Auth.ts#L52)_

Will create JWT and store it if the user exists

#### Parameters:

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `email`    | string | string      |
| `password` | string | string      |

**Returns:** Promise\<[User](_helpers_user_.user.md)>

Promise<User>

---

### signOut

▸ **signOut**(): Promise\<unknown>

_Defined in [services/Auth.ts:96](https://github.com/sinewtech/waterbase/blob/b0835b6/lib/services/Auth.ts#L96)_

Will sign out the user from its account

**Returns:** Promise\<unknown>

Promise<any>
