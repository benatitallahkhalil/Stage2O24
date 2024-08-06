import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Bilan } from 'src/app/models/bilan.model';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
    bilan: Bilan;

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
      this.bilan = this.config.data.bilan;
    }

    onNoClick(): void {
      this.ref.close(false);
    }

    onYesClick(): void {
      this.ref.close(true);
    }
  }

