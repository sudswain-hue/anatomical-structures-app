import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructureListComponent } from "./features/structure-list/structure-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructureListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anatomical-structures-app';
}
