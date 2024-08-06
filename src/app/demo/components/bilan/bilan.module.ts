import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BilanRoutingModule } from "./bilan-routing.module";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
    declarations: [
      ListComponent,
      FormComponent,
      DeleteDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        BilanRoutingModule,
        DialogModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule,
        DynamicDialogModule,
        CalendarModule,
        InputTextModule

    ],
    providers: [],
  })
  export class BilanModule { }
