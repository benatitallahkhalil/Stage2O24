import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LensRoutingModule } from './lens-routing.module';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { LensListComponent } from './lens-list/lens-list.component';
import { LensDialogComponent } from './lens-dialog/lens-dialog.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    LensListComponent,
    LensDialogComponent
  ],
  imports: [
    CommonModule,
    LensRoutingModule,
    FormsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule
  ]
})
export class LensModule { }
