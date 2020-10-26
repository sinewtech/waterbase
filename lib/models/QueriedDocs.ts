import { Document } from './Document';

export interface QueriedDocs {
  size: number;
  docs: Document[];
  empty: boolean;
  query: object;
}
