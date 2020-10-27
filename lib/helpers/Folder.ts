import Client from '../Client';
import { Folders } from '../models/Folders';
import { Files } from '../models/Files';

class Folder implements Folders {
  path: string = '';

  name: string = '';

  files: Files[] = [];

  #client: Client;
  constructor(client: Client, path: string) {
    this.#client = client;
  }
}

export = Folder;
