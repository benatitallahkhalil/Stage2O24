import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reclamation-dialog',
  templateUrl: './reclamation-dialog.component.html',
  styleUrls: ['./reclamation-dialog.component.scss']
})
export class ReclamationDialogComponent {
    @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    @Input() selectedReclamation: any = {};
    @Input() visible: boolean = false;
    @Output() visibleChange = new EventEmitter<boolean>();
    @Output() onAdd = new EventEmitter<any>();
    @Output() onModify = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();

    reclamationOptions = [
        { label: 'Code 1', value: 'L001' },
        { label: 'Code 2', value: 'L002' }
    ];
    tvaOptions = [
        { label: 'TVA 1', value: '%7'},
        { label: 'TVA 2', value: '%19' }
    ];
    newReclamation: any = {};

    familleOptions = [
        { label: 'Famille 1', value: 1 },
        { label: 'Famille 2', value: 2 },
    ];

    sousfamilleOptions = [
        { label: 'Fournisseur 1', value: 1 },
        { label: 'Fournisseur 2', value: 2 },
    ];

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
          return 'Ajouter Reclamation';
        case 'consult':
          return 'Détails Reclamation';
        case 'modify':
          return 'Modifier Reclamation';
        default:
          return 'Confirmation de Suppression';
      }
    }

    get currentReclamation() {
      return this.isAddDialog ? this.newReclamation : this.selectedReclamation;
    }

    save() {
      if (this.isAddDialog) {
        this.onAdd.emit(this.newReclamation);
        this.newReclamation = {};
      } else if (this.isModifyDialog) {
        this.onModify.emit(this.selectedReclamation);
      }
      this.closeDialog();
    }

    cancel() {
      this.closeDialog();
    }

    confirmDelete() {
      this.onDelete.emit(this.selectedReclamation);
      this.closeDialog();
    }

    private closeDialog() {
      this.visible = false;
      this.visibleChange.emit(this.visible);
    }
}
