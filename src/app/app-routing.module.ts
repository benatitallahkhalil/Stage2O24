import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";



@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },

                    { path: 'bilan', loadChildren: () => import('./demo/components/bilan/bilan.module').then(m => m.BilanModule) },
                    { path: 'peniche', loadChildren: () => import('./demo/components/peniches/peniches.module').then(m => m.PenichesModule) },
                    { path: 'article', loadChildren: () => import('./demo/components/article/article.module').then(m => m.ArticleModule) },
                    { path: 'lens', loadChildren: () => import('./demo/components/lens/lens.module').then(m => m.LensModule) },
                    { path: 'reclamation', loadChildren: () => import('./demo/components/reclamation/reclamation.module').then(m => m.ReclamationModule) },
                    { path: 'avance', loadChildren: () => import('./demo/components/avance-fournisseur/avance-fournisseur.module').then(m => m.AvanceFournisseurModule) },
                    { path: 'divers', loadChildren: () => import('./demo/components/divers/divers.module').then(m => m.DiversModule) },
                    { path: 'medecin', loadChildren: () => import('./demo/components/medecin/medecin.module').then(m => m.MedecinModule) },
                    { path: 'fournisseur', loadChildren: () => import('./demo/components/fournisseurs/fournisseurs.module').then(m => m.FournisseursModule) }


                ],
             },
         ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
