import Auth from './lib/services/Auth';
import Database from './lib/services/Database';
import Client from './lib/Client';
import { WaterbaseConfig } from './lib/models/Config';

class Waterbase {
  private auth: Auth;

  private Client: Client;

  private database: Database;

  constructor() {
    this.Client = {} as Client;
    this.auth = {} as Auth;
    this.database = {} as Database;
  }

  initialize = (config: WaterbaseConfig) => {
    this.Client = new Client(config);
  };

  Auth = (): Auth => {
    if (this.auth !== ({} as Auth)) {
      console.log('se creo');
      this.auth = new Auth(this.Client);
    }
    return this.auth;
  };

  Database = (): Database => {
    if (this.database !== ({} as Database)) {
      console.log('se creo');
      this.database = new Database(this.Client);
    }
    return this.database;
  };
}
export = new Waterbase();
