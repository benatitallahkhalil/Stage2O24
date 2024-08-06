import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
    @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    @Input() selectedDivers: any = {};
    @Input() visible: boolean = false;
    @Output() visibleChange = new EventEmitter<boolean>();
    @Output() onAdd = new EventEmitter<any>();
    @Output() onModify = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();

    newDivers: any = {};

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
          return 'Ajouter Divers';
        case 'consult':
          return 'Détails Divers';
        case 'modify':
          return 'Modifier Divers';
        default:
          return 'Confirmation de Suppression';
      }
    }

    get currentDivers() {
      return this.isAddDialog ? this.newDivers : this.selectedDivers;
    }

    save() {
      if (this.isAddDialog) {
        this.onAdd.emit(this.newDivers);
        this.newDivers = {};
      } else if (this.isModifyDialog) {
        this.onModify.emit(this.selectedDivers);
      }
      this.closeDialog();
    }

    cancel() {
      this.closeDialog();
    }

    confirmDelete() {
      this.onDelete.emit(this.selectedDivers);
      this.closeDialog();
    }

    private closeDialog() {
      this.visible = false;
      this.visibleChange.emit(this.visible);
    }
  }
