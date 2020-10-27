import Client from '../Client';
import { Files } from '../models/Files';

class File implements Files {
  path: string = '';

  name: string = '';

  downloadUrl: string = '';

  #client: Client;

  constructor(client: Client, path: string, name: string) {
    this.path = path;
    this.name = name;
    this.#client = client;
  }
}

export = File;
