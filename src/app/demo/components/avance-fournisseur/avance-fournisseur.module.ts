import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvanceFournisseurRoutingModule } from './avance-fournisseur-routing.module';
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
import { ListComponent } from './list/list.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    ListComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AvanceFournisseurRoutingModule,
    FormsModule,
    TableModule,
    DialogModule,
    ToolbarModule,
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
export class AvanceFournisseurModule { }
