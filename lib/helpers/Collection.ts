import Client from '../Client';
import Document from './Document';
import { Collection as Coll } from '../models/Collection';

class Collection implements Coll {
  name: string = '';

  #client: Client;

  #query: object = {};

  constructor(client: Client, name: string) {
    this.name = name;
    this.#client = client;
  }

  /**
   * Assigns the query to be ready before getting the docs
   *
   * @param query object
   */
  where = (query: object) => {
    this.#query = query;
    return this;
  };

  /**
   * Gets a single doc of the collection
   *
   * @param id string
   */
  doc = (id: string) =>
    new Promise<Document>((res, rej) => {
      this.#client
        .call(
          'post',
          `/collections/query/${this.name}`,
          {
            'content-type': 'application/json',
          },
          { query: { _id: id } }
        )
        .then((value) => {
          const { _id, ...docData } = value.docs[0];
          res(new Document(this.#client, this.name, _id, docData));
        })
        .catch(rej);
    });

  /**
   * Gets gets all the docs that the where got or all in general
   *
   * @param id string
   */
  get = () =>
    new Promise<object>((res, rej) => {
      if (this.name !== '' && this.#query !== {}) {
        this.#client
          .call(
            'post',
            `/collections/query/${this.name}`,
            {
              'content-type': 'application/json',
            },
            { query: this.#query }
          )
          .then((data) => {
            const Documents: Document[] = data.docs.map((doc: any) => {
              const { _id, ...docData } = doc;
              return new Document(this.#client, this.name, _id, docData);
            });
            this.#query = {};
            res(Documents);
          })
          .catch(rej);
      } else if (this.name !== '' && this.#query === {}) {
        this.#client
          .call('get', `/collections/${this.name}`)
          .then((data) => {
            const Documents: Document[] = data.docs.map((doc: any) => {
              const { _id, ...docData } = doc;
              return new Document(this.#client, this.name, _id, docData);
            });
            this.#query = {};
            res(Documents);
          })
          .catch(rej);
      } else {
        rej(new Error('Please set a collection name'));
      }
    });
}

export = Collection;
