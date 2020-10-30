import { Documents } from './Documents';

export interface QueriedDocs {
  size: number;
  docs: Documents[];
  empty: boolean;
  query: object;
}
