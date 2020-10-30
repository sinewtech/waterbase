import Auth from './lib/services/Auth';
import Database from './lib/services/Database';
import Storage from './lib/services/Storage';
import Client from './lib/Client';
import { WaterbaseConfig } from './lib/models/Config';

class Waterbase {
  private auth: Auth;

  private database: Database;

  private storage: Storage;

  #Client: Client;

  constructor() {
    this.#Client = {} as Client;
    this.auth = {} as Auth;
    this.database = {} as Database;
    this.storage = {} as Storage;
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

  Storage = (): Storage => {
    if (this.storage !== ({} as Storage)) {
      this.storage = new Storage(this.#Client);
    }
    return this.storage;
  };
}

export = new Waterbase();
