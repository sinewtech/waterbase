**[waterbase](../README.md)**

> [Globals](../README.md) / Auth

# Class: Auth

## Hierarchy

- [Service](service.md)

  ↳ **Auth**

## Index

### Constructors

- [constructor](auth.md#constructor)

### Properties

- [client](auth.md#client)

### Methods

- [CreateAccount](auth.md#createaccount)
- [getCurrentUser](auth.md#getcurrentuser)
- [loginWithEmailAndPassword](auth.md#loginwithemailandpassword)
- [signOut](auth.md#signout)

## Constructors

### constructor

\+ **new Auth**(`client`: [Client](client.md)): [Auth](auth.md)

_Inherited from [Service](service.md).[constructor](service.md#constructor)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/Service.ts#L4)_

#### Parameters:

| Name     | Type                |
| -------- | ------------------- |
| `client` | [Client](client.md) |

**Returns:** [Auth](auth.md)

## Properties

### client

• **client**: [Client](client.md)

_Inherited from [Service](service.md).[client](service.md#client)_

_Defined in [Service.ts:4](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/Service.ts#L4)_

## Methods

### CreateAccount

▸ **CreateAccount**(`email`: string, `password`: string, `profile?`: undefined \| object): Promise\<[User](user.md)>

_Defined in [services/Auth.ts:22](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/services/Auth.ts#L22)_

Will create the account and create a JWT and store it (login)

#### Parameters:

| Name       | Type                | Description |
| ---------- | ------------------- | ----------- |
| `email`    | string              | string      |
| `password` | string              | string      |
| `profile?` | undefined \| object | object      |

**Returns:** Promise\<[User](user.md)>

Promise<User>

---

### getCurrentUser

▸ **getCurrentUser**(): Promise\<[User](user.md)>

_Defined in [services/Auth.ts:78](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/services/Auth.ts#L78)_

Will decode the current JWT and return it

**Returns:** Promise\<[User](user.md)>

Promise<User>

---

### loginWithEmailAndPassword

▸ **loginWithEmailAndPassword**(`email`: string, `password`: string): Promise\<[User](user.md)>

_Defined in [services/Auth.ts:52](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/services/Auth.ts#L52)_

Will create JWT and store it if the user exists

#### Parameters:

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `email`    | string | string      |
| `password` | string | string      |

**Returns:** Promise\<[User](user.md)>

Promise<User>

---

### signOut

▸ **signOut**(): Promise\<unknown>

_Defined in [services/Auth.ts:96](https://github.com/sinewtech/waterbase/blob/7e81c58/lib/services/Auth.ts#L96)_

Will sign out the user from its account

**Returns:** Promise\<unknown>

Promise<any>
