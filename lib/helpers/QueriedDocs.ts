import { QueriedDocs as QD } from '../models/QueriedDocs';
import { Document } from '../models/Document';

class QueriedDocs implements QD {
  size: number = 0;
  docs: Document[] = [];
  empty: boolean = false;
  query: object = {};

  constructor(query: object, docs: Document[]) {
    this.docs = docs;
    this.size = this.docs.length;
    this.empty = this.docs.length <= 0;
    this.query = query;
  }
}

export = QueriedDocs;
