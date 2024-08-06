// medecin-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MedecinDialogComponent } from '../medecin-dialog/medecin-dialog.component';

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.scss']
})
export class MedecinListComponent implements OnInit {
  medecins = [
    { codeMedecin: '001', nom: 'belhaj', prenom: 'taieb', adresse: 'clinique lac', telCabinet: '71860266', telDomicile: '', telPortable1: '24344866', telPortable2: '', email: '' },
    { codeMedecin: '002', nom: 'BEN BRAHIM CH...', prenom: 'FARAH', adresse: 'CENTRE URBAI...', telCabinet: '71820261', telDomicile: '', telPortable1: '98373270', telPortable2: '', email: '' },
    { codeMedecin: '003', nom: 'KAMOUN ABDEL...', prenom: 'RIM', adresse: '23 AV 18 JANV 2...', telCabinet: '71702887', telDomicile: '', telPortable1: '71702939', telPortable2: '', email: '' },
    { codeMedecin: '004', nom: 'ben khaled', prenom: 'jamel', adresse: '', telCabinet: '75490009', telDomicile: '', telPortable1: '', telPortable2: '', email: '' },
    { codeMedecin: '005', nom: 'bel haj ali hassi...', prenom: 'sonia', adresse: '', telCabinet: '70938970', telDomicile: '', telPortable1: '', telPortable2: '', email: '' },
    { codeMedecin: '006', nom: 'TRIKI BOUGUER...', prenom: 'WAFA', adresse: '', telCabinet: '70726213', telDomicile: '', telPortable1: '', telPortable2: '', email: '' },
    { codeMedecin: '007', nom: 'JALELEDDINE S...', prenom: 'MOHAMED', adresse: '', telCabinet: '71762605', telDomicile: '55762605', telPortable1: '', telPortable2: '', email: '' },
    { codeMedecin: '008', nom: 'BOUJEMAA BAC...', prenom: 'CHIRAZ', adresse: 'LAC 2', telCabinet: '71276299', telDomicile: '', telPortable1: '98339753', telPortable2: '', email: '' },
    { codeMedecin: '009', nom: 'loukil tabessi', prenom: 'ines', adresse: '', telCabinet: '', telDomicile: '', telPortable1: '', telPortable2: '', email: '' },
    { codeMedecin: '010', nom: 'kamoun', prenom: 'heykel', adresse: 'el manar III', telCabinet: '71870165', telDomicile: '', telPortable1: '', telPortable2: '', email: '' },
  
  ];

  selectedMedecin: any;
  ref: DynamicDialogRef;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void { }

  showDialog(action: string) {
    this.ref = this.dialogService.open(MedecinDialogComponent, {
      header: `${action === 'add' ? 'Ajouter' : action === 'modify' ? 'Modifier' : 'Consulter'} Medecin`,
      width: '50%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: {
        medecin: this.selectedMedecin,
        action: action
      }
    });

    this.ref.onClose.subscribe((medecin: any) => {
      if (medecin) {
        if (action === 'add') {
          this.medecins = [...this.medecins, medecin];
        } else if (action === 'modify') {
          const index = this.medecins.findIndex(m => m.codeMedecin === medecin.codeMedecin);
          this.medecins[index] = medecin;
          this.medecins = [...this.medecins];
        }
      }
    });
  }

  deleteMedecin() {
    if (this.selectedMedecin) {
      this.medecins = this.medecins.filter(m => m.codeMedecin !== this.selectedMedecin.codeMedecin);
      this.selectedMedecin = null;
    }
  }
}
