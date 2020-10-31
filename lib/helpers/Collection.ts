import Client from '../Client';
import QueriedDocs from './QueriedDocs';
import Document from './Document';

class Collection {
  #name: string = '';

  #client: Client;

  #query: object = {};

  constructor(client: Client, name: string) {
    this.#name = name;
    this.#client = client;
  }

  /**
   * Assigns the query to be ready before getting the docs
   *
   * @param query object
   *
   * @return self
   */
  where = (query: any) => {
    if (query.id) {
      const { id, ...all } = query;
      this.#query = { _id: id, ...all };
    } else {
      this.#query = query as object;
    }
    return { get: this.get };
  };

  /**
   * Adds a single doc to the collection
   *
   * @param doc object
   *
   * @return Promise<Document>
   */
  add = (doc: object) =>
    new Promise<Document>((res, rej) => {
      this.#client
        .call(
          'post',
          `/database/${this.#name}`,
          {
            'content-type': 'application/json',
          },
          { object: doc }
        )
        .then((value) => {
          const { _id, ...data } = value.doc;
          res(new Document(this.#client, this.#name, _id, data));
        })
        .catch(rej);
    });

  /**
   * Gets a single doc of the collection
   *
   * @param id string
   *
   * @return Promise<Document>
   */
  doc = (id: string) =>
    new Promise<Document>((res, rej) => {
      this.#client
        .call(
          'post',
          `/database/query/${this.#name}`,
          {
            'content-type': 'application/json',
          },
          { query: { _id: id } }
        )
        .then((value) => {
          if (value.docs.length !== 0) {
            const { _id, ...docData } = value.docs[0];
            res(new Document(this.#client, this.#name, _id, docData));
          } else {
            rej(new Error(`Couldn't find a doc with the id: ${id}`));
          }
        })
        .catch(rej);
    });

  /**
   * Gets gets all the docs that the where got or all in general
   *
   * @param id string
   *
   * @return Promise<QueriedDocs>
   */
  get = () =>
    new Promise<QueriedDocs>((res, rej) => {
      const resQD = (res: any, data: any) => {
        const Documents: Document[] = data.docs.map((doc: any) => {
          const { _id, ...docData } = doc;
          return new Document(this.#client, this.#name, _id, docData);
        });
        const QD = new QueriedDocs(this.#query, Documents);
        this.#query = {};
        res(QD);
      };
      if (this.#name !== '' && this.#query !== {}) {
        this.#client
          .call(
            'post',
            `/database/query/${this.#name}`,
            {
              'content-type': 'application/json',
            },
            { query: this.#query }
          )
          .then((data) => {
            resQD(res, data);
          })
          .catch(rej);
      } else if (this.#name !== '' && this.#query === {}) {
        this.#client
          .call('get', `/database/${this.#name}`)
          .then((data) => {
            resQD(res, data);
          })
          .catch(rej);
      } else {
        rej(new Error('Please set a collection name'));
      }
    });
}

export = Collection;
