import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';  

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { ColleguesService } from './services/collegue.service';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { ScorePipe } from './pipes/score.pipe';
import { NomFilterPipe } from './pipes/nom-filter.pipe';
import { AjoutCollegueComponent } from './ajout-collegue/ajout-collegue.component';

const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /accueil affiche le composant Accueil
  { path: 'collegues', component: ListeColleguesComponent }, // /listeCollegues affiche le composant Accueil
  { path: 'collegues/nouveau', component: AjoutCollegueComponent}, // Affiche le formulaire d'ajout d'un collègue
  { path: 'collegues/:nom', component: DetailCollegueComponent }, // Affiche le détail d'un collègue
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route accueil par défaut
  { path: '**', component: PageNonTrouveeComponent } // page non trouvée

];


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    PageNonTrouveeComponent,
    DetailCollegueComponent,
    ScorePipe,
    NomFilterPipe,
    AjoutCollegueComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ColleguesService],
  bootstrap: [AppComponent]
})

export class AppModule { }