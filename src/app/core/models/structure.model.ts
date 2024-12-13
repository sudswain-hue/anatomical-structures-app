export enum BM_TYPE {
    G = 'gene',
    P = 'protein'
  }
  
  export interface Structure {
    name?: string;
    id?: string;
    rdfs_label?: string;
    b_type?: BM_TYPE;
    error?: string;
  }