import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /accueil affiche le composant Accueil

  { path: 'collegues', component: ListeColleguesComponent }, // /listeCollegues affiche le composant Accueil

  { path: 'collegues/:nom', component: DetailCollegueComponent }, // /accueil affiche le composant Accueil

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
    DetailCollegueComponent

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ColleguesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
