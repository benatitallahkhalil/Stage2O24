import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  @Input() selectedAvance: any = {};
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onModify = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  newAvance: any = {};

  get isAddDialog() {
    return this.dialogType === 'add';
  }

  get isConsultDialog() {
    return this.dialogType === 'consult';
  }

  get isModifyDialog() {
    return this.dialogType === 'modify';
  }

  get isDeleteDialog() {
    return this.dialogType === 'delete';
  }

  get header() {
    switch (this.dialogType) {
      case 'add':
        return 'Ajouter Avance';
      case 'consult':
        return 'Détails Avance';
      case 'modify':
        return 'Modifier Avance';
      default:
        return 'Confirmation de Suppression';
    }
  }

  get currentAvance() {
    return this.isAddDialog ? this.newAvance : this.selectedAvance;
  }

  save() {
    if (this.isAddDialog) {
      this.onAdd.emit(this.newAvance);
      this.newAvance = {};
    } else if (this.isModifyDialog) {
      this.onModify.emit(this.selectedAvance);
    }
    this.closeDialog();
  }

  cancel() {
    this.closeDialog();
  }

  confirmDelete() {
    this.onDelete.emit(this.selectedAvance);
    this.closeDialog();
  }

  private closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
