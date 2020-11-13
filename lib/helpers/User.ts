import jwt from 'jsonwebtoken';
import { LocalStorage } from 'node-localstorage';
import { Users } from '../models/Users';
import Client from '../Client';
if (typeof global.localStorage === 'undefined' || global.localStorage === null) {
  global.localStorage = new LocalStorage('./localStorage');
}

class User implements Users {
  email: string = '';
  id: string = '';
  profile?: object = {};
  #token: string = '';
  #refreshToken: string = '';
  #client: Client;

  constructor(client: Client, token: string) {
    this.#client = client;
    this.#token = token;
    const decode: any = jwt.decode(this.#token);
    this.email = decode.email;
    this.profile = decode.profile;
    this.id = decode.id;
    this.#refreshToken = decode.refreshToken;
  }

  /**
   *
   * Refresh the jwt token
   *
   * @return Promise<any>
   */
  renewToken = () => {
    return new Promise((res, rej) => {
      this.#client
        .call(
          'post',
          '/auth/token',
          { 'content-type': 'application/json' },
          {
            token: this.#refreshToken,
            email: this.email,
          }
        )
        .then((data) => {
          this.#token = data.token;
          localStorage.setItem('authToken', this.#token);
          const decode: any = jwt.decode(this.#token);
          this.email = decode.email;
          this.profile = decode.profile;
          this.id = decode.id;
          this.#refreshToken = decode.refreshToken;
          res(data);
        })
        .catch(rej);
    });
  };

  /**
   *
   * Will delete the account from waterbase
   *
   * @return Promise<any>
   */
  deleteAccount = () => {
    return new Promise((res, rej) => {
      this.#client
        .call('delete', `/auth/token/${this.id}`, { 'content-type': 'application/json' })
        .then((data) => {
          localStorage.removeItem('authToken');
          res(data);
        })
        .catch(rej);
    });
  };
}

export = User;
