import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    tel:string='';

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {


        this.model = [
            {
                label: 'Menu',
                items: [
                        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                        { label: 'Liste des Bilans', icon: 'pi pi-fw pi-list', routerLink: ['/bilan'] },
                        { label: 'Liste des Peniches', icon: 'pi pi-fw pi-list', routerLink: ['/peniche'] },
                        { label: 'Liste des Article', icon: 'pi pi-fw pi-list', routerLink: ['/article'] },
                        { label: 'Liste des Lentilles', icon: 'pi pi-fw pi-list', routerLink: ['/lens'] },
                        { label: 'Liste des Reclamation', icon: 'pi pi-fw pi-list', routerLink: ['/reclamation'] },
                        { label: 'Liste des Avance', icon: 'pi pi-fw pi-list', routerLink: ['/avance'] },
                        { label: 'Liste des Divers', icon: 'pi pi-fw pi-list', routerLink: ['/divers'] },
                        { label: 'Liste des Medecins', icon: 'pi pi-fw pi-list', routerLink: ['/medecin'] },
                        { label: 'Liste des Fournisseurs', icon: 'pi pi-fw pi-list', routerLink: ['/fournisseur'] },

                ]

            },

        ];
    }
}
