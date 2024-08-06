import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FournisseursRoutingModule } from './fournisseurs-routing.module';
import { TableModule } from 'primeng/table'; // Importez TableModule depuis PrimeNG
import { ButtonModule } from 'primeng/button'; // Importez ButtonModule depuis PrimeNG
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyDialogComponent } from './family-dialog/family-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    FamilyListComponent,
    FamilyDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule ,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    FournisseursRoutingModule
  ],
  providers: []
})
export class FournisseursModule { }
