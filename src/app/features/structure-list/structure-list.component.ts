import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';
import { ModalService } from '../../core/services/modal.service';
import { Structure } from '../../core/models/structure.model';
import { CommonModule } from '@angular/common';
import { UniqueStructuresPipe } from '../../shared/pipes/unique-structures.pipe';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss'],
  standalone: true,
  imports: [CommonModule, UniqueStructuresPipe]
})
export class StructureListComponent implements OnInit {
  structures$!: Observable<Structure[]>;
  isModalVisible = false;
  selectedStructure: any = null;

  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.structures$ = this.dataService.getData().pipe(
      map(data => {
        return Object.values(data).reduce((acc, rows) => {
          if (Array.isArray(rows)) {
            return acc.concat(...rows.map(row => row.anatomical_structures || []));
          } else {
            return acc;
          }
        }, [] as Structure[]);
      })
    );
  }
  
  showDetails(structure: Structure) {
    this.selectedStructure = structure;
    this.isModalVisible = true;
    if (structure.id) {
      this.dataService.getStructureDetails(structure.id).subscribe({
        next: (details) => {
          this.selectedStructure = {
            name: details.label,
            description: details.description || details.annotation?.definition,
            ontologyLink: details.obo_id,
            iri: details.iri
          };
        },
        error: (error) => {
          console.error('Error fetching structure details:', error);
          this.selectedStructure = { error: 'Failed to fetch structure details' };
        }
      });
    } else {
      this.selectedStructure = { error: 'No ID available for this structure' };
    }
}

  trackByName(index: number, structure: any): string {
    return structure.name;  // Assuming name is unique for each structure
  }

  closeModal() {
    this.isModalVisible = false;
    this.selectedStructure = null;
  }
}
