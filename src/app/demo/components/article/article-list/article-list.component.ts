import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent  {
    article: any[] = [];  // This should be fetched from a service
    selectedArticle: any = null;
    currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    isDialogVisible: boolean = false;

    constructor() {
      // Sample data for testing purposes
      this.article = [
        {
            codeArticle: '001',
            fournisseur: 'Fournisseur 1',
            designation: 'Article 1',
            prixAchatTTC: 100,
            marge: 10,
            prixVenteTTC: 110,
            quantite: 50,
            possibleVenteGratuite: true,
            gestionLot: false

        },
        {
            codeArticle: '001',
            fournisseur: 'Fournisseur 1',
            designation: 'Article 1',
            prixAchatTTC: 100,
            marge: 10,
            prixVenteTTC: 110,
            quantite: 50,
            possibleVenteGratuite: true,
            gestionLot: false

        }
      ];
    }

    openDialog(type: 'add' | 'consult' | 'modify' | 'delete', article?: any) {
      this.currentDialogType = type;
      this.selectedArticle = article || {};
      this.isDialogVisible = true;
    }

    handleAdd(newArticle: any) {
      // Handle add operation
      this.article.push(newArticle);
    }

    handleModify(modifiedArticle: any) {
      // Handle modify operation
      const index = this.article.findIndex(l => l.numeroArticle === modifiedArticle.numeroArticle);
      if (index !== -1) {
        this.article[index] = modifiedArticle;
      }
    }

    handleDelete(deletedArticle: any) {
      // Handle delete operation
      this.article = this.article.filter(l => l.numeroArticle !== deletedArticle.numeroArticle);
    }
    enableButtons() {
        // This method can be used to enable or disable buttons based on the selected row
      }
  }
