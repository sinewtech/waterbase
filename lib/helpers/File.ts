import Client from '../Client';
import { Files } from '../models/Files';

class File implements Files {
  path: string = '';

  #client: Client;

  constructor(client: Client, path: string) {
    this.#client = client;
    this.path = path;
  }

  delete() {
    return new Promise((res, rej) => {
      this.#client
        .call(
          'delete',
          '/storage/',
          {
            'content-type': 'application/json',
          },
          { path: this.path }
        )
        .then((resp) => {
          if (resp.success) {
            res(resp);
          } else {
            rej(new Error("Wasn't able to delete the file"));
          }
        })
        .catch(rej);
    });
  }

  getDownloadUrl() {
    return new Promise<string>((res, rej) => {
      this.#client
        .call(
          'post',
          '/storage/file',
          {
            'content-type': 'application/json',
          },
          { path: this.path }
        )
        .then((resp) => {
          if (resp.success) {
            const { path } = resp.file;
            res(`${this.#client.endpoint}/${path}`);
          } else {
            rej(new Error("Wasn't able to get a download url"));
          }
        })
        .catch(rej);
    });
  }
}

export = File;
