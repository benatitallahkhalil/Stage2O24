import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationDialogComponent } from './reclamation-dialog/reclamation-dialog.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';


import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    ReclamationDialogComponent,
    ReclamationListComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    RadioButtonModule ,
    ToolbarModule,
    PaginatorModule,
    TabViewModule,
    CheckboxModule,
    InputTextModule

  ]
})
export class ReclamationModule { }
