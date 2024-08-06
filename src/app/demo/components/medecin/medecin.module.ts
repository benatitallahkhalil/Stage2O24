// medecin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import { MedecinDialogComponent } from './medecin-dialog/medecin-dialog.component';
import { MedecinRoutingModule } from './medecin-routing.module';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    MedecinListComponent,
    MedecinDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    DynamicDialogModule,
    MedecinRoutingModule
  ],
  providers: []
})
export class MedecinModule { }
