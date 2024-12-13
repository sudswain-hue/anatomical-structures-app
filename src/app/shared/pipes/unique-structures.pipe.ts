import { Pipe, PipeTransform } from '@angular/core';
import { Structure } from '../../core/models/structure.model';

@Pipe({
  name: 'uniqueStructures'
})
export class UniqueStructuresPipe implements PipeTransform {
  transform(structures: Structure[]): Structure[] {
    return structures.filter((structure, index, self) =>
      index === self.findIndex((t) => t.name === structure.name)
    );
  }
}