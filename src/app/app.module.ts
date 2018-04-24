import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AccueilComponent } from './accueil/accueil.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListerColleguesComponent } from './lister-collegues/lister-collegues.component';
import { CollegueService } from './services/collegue.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { Top3Component } from './top3/top3.component';
import { NotePipe } from './note.pipe';
import { PseudoPipe } from './pseudo.pipe';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A
  { path: 'top3', component: Top3Component }, // /page2 affiche le composant B
  { path: 'collegues/nouveau', component: AjouterCollegueComponent },
  { path: 'collegues/:pseudo', component: DetailsComponent },
    { path: '',   redirectTo: '/top3', pathMatch: 'full' }, // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListerColleguesComponent,
    MenuComponent,
    DetailsComponent,
    Top3Component,
    NotePipe,
    PseudoPipe,
    AjouterCollegueComponent

     ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
