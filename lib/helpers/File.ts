import Client from '../Client';
import { Files } from '../models/Files';

class File implements Files {
  path: string = '';

  name: string = '';

  downloadUrl: string = '';

  #client: Client;

  constructor(client: Client, path: string) {
    this.#client = client;
    this.path = path;
  }

  getDownloadUrl() {
    return new Promise<string>((res, rej) => {
      this.#client
        .call('post', '/storage/file', {}, { path: this.path })
        .then((url) => {
          this.downloadUrl = url;
          res(url);
        })
        .catch(rej);
    });
  }
}

export = File;
