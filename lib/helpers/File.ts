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
   * @param file Buffer
   *
   * @return Promise<object>
   */
  upload(file: Blob) {
    return new Promise<object>((res, rej) => {
      const form = new FormData();
      form.append('path', this.path);
      form.append('file', file, path.basename(this.path));
      // Web or node
      if (typeof window !== 'undefined') {
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
      } else {
        this.#client
          .call(
            'post',
            '/storage/',
            {
              'content-type': 'multipart/form-data;',
              ...form.getHeaders(),
            },
            form.getBuffer()
          )
          .then((data) => {
            res(data);
          })
          .catch(rej);
      }
    });
  }

  /**
   * Updates the file with a new path or just the file
   *
   * @param file Buffer
   *
   * @param newPath? string
   *
   * @return Promise<object>
   */
  update(file: Blob, newPath?: string) {
    return new Promise<object>((res, rej) => {
      const form = new FormData();
      form.append('oldPath', this.path);
      form.append('path', newPath || this.path);
      form.append('file', file, path.basename(this.path));
      if (typeof window !== 'undefined') {
        this.#client
          .call(
            'put',
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
      } else {
        this.#client
          .call(
            'put',
            '/storage/',
            {
              'content-type': 'multipart/form-data;',
              ...form.getHeaders(),
            },
            form.getBuffer()
          )
          .then((data) => {
            res(data);
          })
          .catch(rej);
      }
    });
  }
}

export = File;
