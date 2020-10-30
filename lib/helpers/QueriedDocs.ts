import { QueriedDocs as QD } from '../models/QueriedDocs';
import { Documents } from '../models/Documents';

class QueriedDocs implements QD {
  size: number = 0;

  docs: Documents[] = [];

  empty: boolean = false;

  query: object = {};

  constructor(query: object, docs: Documents[]) {
    this.docs = docs;
    this.size = this.docs.length;
    this.empty = this.docs.length <= 0;
    this.query = query;
  }
}

export = QueriedDocs;
