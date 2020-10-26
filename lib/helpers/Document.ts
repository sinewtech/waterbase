import Client from '../Client';
import { Document as Doc } from '../models/Document';

class Document implements Doc {
  id: string = '';

  data: object;

  #collection: string = '';

  #client: Client;

  constructor(client: Client, collection: string, id: string, data: object) {
    this.#client = client;
    this.#collection = collection;
    this.id = id;
    this.data = data;
  }

  /**
   * Updates the selected doc
   *
   * @param update object
   */
  update = (update: object) =>
    new Promise((res, rej) => {
      this.#client
        .call(
          'put',
          `/collections/update/${this.#collection}`,
          {
            'Content-Type': 'application/json',
          },
          { query: { _id: this.id }, update }
        )
        .then((value) => {
          res(value);
        })
        .catch(rej);
    });

  /**
   * Deletes the selected doc
   *
   */
  delete = () =>
    new Promise((res, rej) => {
      this.#client
        .call(
          'delete',
          `/collections/delete/${this.#collection}`,
          {
            'Content-Type': 'application/json',
          },
          { query: { _id: this.id } }
        )
        .then((value) => {
          res(value);
        })
        .catch(rej);
    });
}

export = Document;
