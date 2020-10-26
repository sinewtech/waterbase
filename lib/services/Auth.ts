import Service from '../Service';

class Auth extends Service {
  async CreateUser(email: string, password: string, profile: object = {}) {
    const path = '/auth/';
    return this.client.call(
      'post',
      path,
      {
        'content-type': 'application/json',
      },
      {
        email,
        password,
        profile,
      }
    );
  }
}
export = Auth;
