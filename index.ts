import Auth from './lib/services/Auth';
import Database from './lib/services/Database';
import Client from './lib/Client';
import { WaterbaseConfig } from './lib/models/Config';

class Waterbase {
  private auth: Auth;

  private database: Database;

  #Client: Client;

  constructor() {
    this.#Client = {} as Client;
    this.auth = {} as Auth;
    this.database = {} as Database;
  }

  initialize = (config: WaterbaseConfig) => {
    this.#Client = new Client(config);
  };

  Auth = (): Auth => {
    if (this.auth !== ({} as Auth)) {
      this.auth = new Auth(this.#Client);
    }
    return this.auth;
  };

  Database = (): Database => {
    if (this.database !== ({} as Database)) {
      this.database = new Database(this.#Client);
    }
    return this.database;
  };
}
export = new Waterbase();
