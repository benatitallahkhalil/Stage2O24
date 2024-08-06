import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.scss']
})

export class ArticleDialogComponent {
    @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    @Input() selectedArticle: any = {};
    @Input() visible: boolean = false;
    @Output() visibleChange = new EventEmitter<boolean>();
    @Output() onAdd = new EventEmitter<any>();
    @Output() onModify = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();

    newArticle: any = {};

    fournisseurOptions = [
        { label: 'Fournisseur 1', value: 1 },
        { label: 'Fournisseur 2', value: 2 },
        // Add more options as needed
      ];

      familles = [
        { label: 'Famille 1', value: 'Famille1' },
        { label: 'Famille 2', value: 'Famille2' },
        // Add more familles here
      ];
      sousfamilles = [
        { label: 'Famille 1', value: 'Famille1' },
        { label: 'Famille 2', value: 'Famille2' },
        // Add more familles here
      ];

      typesArticle = [
        { label: 'Type 1', value: 'Type1' },
        { label: 'Type 2', value: 'Type2' },
        // Add more typesArticle here
      ];
      tvaOptions = [
        { label: 'TVA 1', value: '%7'},
        { label: 'TVA 2', value: '%19' }
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
      if (this.isAddDialog) return 'Ajouter Article';
      if (this.isConsultDialog) return 'Détails Article';
      if (this.isModifyDialog) return 'Modifier Article';
      return 'Confirmation de Suppression';
    }

    get currentArticle() {
      return this.isAddDialog ? this.newArticle : this.selectedArticle;
    }

    save() {
      if (this.isAddDialog) {
        this.onAdd.emit(this.newArticle);
        this.newArticle = {};
      } else if (this.isModifyDialog) {
        this.onModify.emit(this.selectedArticle);
      }
      this.closeDialog();
    }

    cancel() {
      this.closeDialog();
    }

    confirmDelete() {
      this.onDelete.emit(this.selectedArticle);
      this.closeDialog();
    }

    private closeDialog() {
      this.visible = false;
      this.visibleChange.emit(this.visible);
    }

    }
