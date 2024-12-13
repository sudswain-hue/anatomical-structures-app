import { Routes } from '@angular/router';
import { StructureListComponent } from './features/structure-list/structure-list.component';

export const routes: Routes = [
  { path: '', component: StructureListComponent },
  { path: '**', redirectTo: '' }
];
