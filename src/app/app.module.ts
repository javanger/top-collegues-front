import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CollegueService } from './services/collegue.service';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CollegueDetailComponent } from './pages/collegue-detail/collegue-detail.component';
import { Top3Component } from './pages/top3/top3.component';
import { BandeauComponent } from './shared/bandeau/bandeau.component';
import { AvisComponent} from './shared/avis/avis.component';
import { CollegueComponent } from './shared/collegue/collegue.component';
import { ListeColleguesComponent } from './shared/liste-collegues/liste-collegues.component';
import { AjouterUnCollegueComponent } from './shared/ajouter-un-collegue/ajouter-un-collegue.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ScorePipe } from './pipes/score.pipe';
import { FiltrePipe } from './pipes/filtre.pipe';


const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A

  { path: 'top3', component: Top3Component }, // /page2 affiche le composant B

  { path: 'collegues/nouveau', component: AjouterUnCollegueComponent },

  { path: 'collegues/:pseudo', component: CollegueDetailComponent },  

  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    MenuComponent,
    Top3Component,
    CollegueDetailComponent,
    ScorePipe,
    FiltrePipe,
    AjouterUnCollegueComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
