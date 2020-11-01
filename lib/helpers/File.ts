import Client from '../Client';
import { Files } from '../models/Files';
import FormData from 'form-data';
import path from 'path';
class File implements Files {
  path: string = '';

  #client: Client;

  constructor(client: Client, path: string) {
    this.#client = client;
    this.path = path;
  }

  /**
   * Delete the file
   *
   * @return Promise<any>
   */
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

  /**
   * Gets a download url for the file
   *
   * @return string
   */
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

  /**
   * Uploads the param to the file path
   *
   * @param file
   *
   * @return Promise<any>
   */
  upload(file: any) {
    return new Promise((res, rej) => {
      const form = new FormData();
      form.append('path', this.path);
      form.append('file', file);
      this.#client
        .call(
          'post',
          '/storage/',
          {
            'content-type': 'multipart/form-data;',
          },
          form
        )
        .then((data) => {
          res(data);
        })
        .catch(rej);
    });
  }
}

export = File;
