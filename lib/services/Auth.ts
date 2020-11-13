import jwt from 'jsonwebtoken';
import { LocalStorage } from 'node-localstorage';
import Service from '../Service';
import User from '../helpers/User';
if (typeof global.localStorage === 'undefined' || global.localStorage === null) {
  global.localStorage = new LocalStorage('./localStorage');
}
class Auth extends Service {
  /**
   *
   * Will create the account and create a JWT and store it (login)
   *
   * @param email string
   *
   * @param password string
   *
   * @param profile object
   *
   * @return Promise<User>
   */

  CreateAccount = (email: string, password: string, profile?: object) => {
    return new Promise<User>((res, rej) => {
      this.client
        .call(
          'post',
          '/auth/',
          {
            'content-type': 'application/json',
          },
          { email, password, profile: profile || {} }
        )
        .then((value) => {
          localStorage.setItem('authToken', value.token);
          res(new User(this.client, value.token));
        })
        .catch(rej);
    });
  };

  /**
   *
   * Will create JWT and store it if the user exists
   *
   * @param email string
   *
   * @param password string
   *
   * @return Promise<User>
   */

  loginWithEmailAndPassword = (email: string, password: string) => {
    return new Promise<User>((res, rej) => {
      this.client
        .call(
          'post',
          '/auth/login',
          {
            'content-type': 'application/json',
          },
          { email, password }
        )
        .then((value) => {
          localStorage.setItem('authToken', value.token);
          res(new User(this.client, value.token));
        })
        .catch(rej);
    });
  };

  /**
   *
   * Will decode the current JWT and return it
   *
   * @return Promise<User>
   */

  getCurrentUser = () => {
    return new Promise<User>((res, rej) => {
      const token = localStorage.getItem('authToken');
      if (token !== null) {
        res(new User(this.client, token));
      } else {
        rej(null);
      }
    });
  };

  /**
   *
   * Will sign out the user from its account
   *
   * @return Promise<any>
   */

  signOut = () => {
    return new Promise((res, rej) => {
      const token = localStorage.getItem('authToken') as string;
      const email = (jwt.decode(token) as any).email;
      if (token !== null) {
        this.client
          .call(
            'delete',
            '/auth/token',
            { 'content-type': 'application/json' },
            {
              email,
            }
          )
          .then((data) => {
            localStorage.removeItem('authToken');
            res(data);
          })
          .catch(rej);
      } else {
        rej(new Error('no user signed in'));
      }
    });
  };
}
export = Auth;
