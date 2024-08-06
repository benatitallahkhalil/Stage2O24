import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  avance: any[] = [];  // This should be fetched from a service
  selectedAvance: any = null;
  currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  isDialogVisible: boolean = false;

  constructor() {
    // Sample data for testing purposes
    this.avance = [
      {
        numeroAvance: 'L001',
        fournisseur: 'Supplier1',
        dateAvance: '2022-01-01',
        montantAvance: 1000,
        numeroPiece: 12,
        etatAvance: "encoure"
      },
      {
        numeroAvance: 'L002',
        fournisseur: 'Supplier2',
        dateAvance: '2023-01-01',
        montantAvance: 1000,
        numeroPiece: 12,
        etatAvance: "encour"
      }
    ];
  }

  openDialog(type: 'add' | 'consult' | 'modify' | 'delete', avance?: any) {
    this.currentDialogType = type;
    this.selectedAvance = avance || {};
    this.isDialogVisible = true;
  }

  handleAdd(newAvance: any) {
    // Handle add operation
    this.avance.push(newAvance);
  }

  handleModify(modifiedAvance: any) {
    // Handle modify operation
    const index = this.avance.findIndex(l => l.numeroAvance === modifiedAvance.numeroAvance);
    if (index !== -1) {
      this.avance[index] = modifiedAvance;
    }
  }

  handleDelete(deletedAvance: any) {
    // Handle delete operation
    this.avance = this.avance.filter(l => l.numeroAvance !== deletedAvance.numeroAvance);
  }
}
