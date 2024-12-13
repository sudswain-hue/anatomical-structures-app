import { Structure } from './structure.model';

export interface Row {
  [x: string]: any;
  anatomical_structures: Array<Structure>;
  cell_types: Array<Structure>;
  biomarkers: Array<Structure>;
}