import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-peniche',
  templateUrl: './dialog-peniche.component.html',
  styleUrls: ['./dialog-peniche.component.scss']
})
export class DialogPenicheComponent {
  @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  @Input() selectedPeniche: any = {};
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onModify = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  newPeniche: any = {};

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
    if (this.isAddDialog) return 'Ajouter Peniche';
    if (this.isConsultDialog) return 'Détails Peniche';
    if (this.isModifyDialog) return 'Modifier Peniche';
    return 'Confirmation de Suppression';
  }

  get currentPeniche() {
    return this.isAddDialog ? this.newPeniche : this.selectedPeniche;
  }

  save() {
    console.log('Saving data...');
    if (this.isAddDialog) {
      this.onAdd.emit(this.newPeniche);
      this.newPeniche = {};
    } else if (this.isModifyDialog) {
      this.onModify.emit(this.selectedPeniche);
    }
    this.closeDialog();
  }

  cancel() {
    console.log('Cancelling...');
    this.closeDialog();
  }

  confirmDelete() {
    console.log('Confirming delete...');
    this.onDelete.emit(this.selectedPeniche);
    this.closeDialog();
  }

  private closeDialog() {
    console.log('Closing dialog...');
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
