import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructureListComponent } from './features/structure-list/structure-list.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { UniqueStructuresPipe } from './shared/pipes/unique-structures.pipe';

@NgModule({
  imports: [
    AppComponent,
    ModalComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StructureListComponent,
    UniqueStructuresPipe,
    CommonModule
  ],
  providers: [],
  exports: [StructureListComponent, CommonModule ]
})

export class StructureListModule { }
export class SharedModule { }

