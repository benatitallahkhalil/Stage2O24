import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenichesRoutingModule } from './peniches-routing.module';
import { PenichesListComponent } from './peniches-list/peniches-list.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { DialogPenicheComponent } from './dialog-peniche/dialog-peniche.component';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    PenichesListComponent,
    DialogPenicheComponent,


  ],
  imports: [
    CommonModule,
    PenichesRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    DialogModule,
    RadioButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToolbarModule
  ],
  providers:[ConfirmationService]
})
export class PenichesModule { }
