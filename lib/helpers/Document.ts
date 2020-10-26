import Client from '../Client';
import { Document } from '../models/Document';

class Doc implements Document {
  id: string = '';

  data: object;

  collection: string = '';

  private client: Client;

  constructor(client: Client, collection: string, id: string, data: object) {
    this.client = client;
    this.collection = collection;
    this.id = id;
    this.data = data;
  }

  update = (update: object) =>
    new Promise((res, rej) => {
      this.client
        .call(
          'put',
          `/collections/update/${this.collection}`,
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

  delete = () =>
    new Promise((res, rej) => {
      this.client
        .call(
          'delete',
          `/collections/delete/${this.collection}`,
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

export = Doc;
