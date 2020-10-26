/* eslint-disable no-underscore-dangle */
import Client from '../Client';
import Document from './Document';

class Collection {
  name: string = '';

  client: Client;

  query: object = {};

  constructor(client: Client, name: string) {
    this.name = name;
    this.client = client;
  }

  where = (query: object) => {
    this.query = query;
    return this;
  };

  get = () =>
    new Promise<object>((res, rej) => {
      if (this.name !== '' && this.query !== {}) {
        this.client
          .call(
            'post',
            `/collections/query/${this.name}`,
            {
              'content-type': 'application/json',
            },
            { query: this.query }
          )
          .then((data) => {
            const Documents: Document[] = data.docs.map((doc: any) => {
              const { _id, ...docData } = doc;
              return new Document(this.client, this.name, _id, docData);
            });
            res(Documents);
          })
          .catch(rej);
      } else if (this.name !== '' && this.query === {}) {
        this.client
          .call('get', `/collections/${this.name}`)
          .then((data) => {
            const Documents: Document[] = data.docs.map((doc: any) => {
              const { _id, ...docData } = doc;
              return new Document(this.client, this.name, _id, docData);
            });
            res(Documents);
          })
          .catch(rej);
      } else {
        rej(new Error('Please set a collection name'));
      }
    });
}

export = Collection;
