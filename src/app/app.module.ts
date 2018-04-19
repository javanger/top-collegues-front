import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { DemoComponent } from "./demo/demo.component";
import { BandeauComponent } from "./bandeau/bandeau.component";
import { AvisComponent } from "./avis/avis.component";
import { CollegueComponent } from "./collegue/collegue.component";
import { ListeColleguesComponent } from "./listeCollegues/listeCollegues.component";
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from "./page404/page404.component";

// services
import { CollegueService } from './services/collegue.service';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { DetailsCollegueComponent } from './details-collegue/details-collegue.component';

const appRoutes: Routes = [

  { path: 'accueil', component: HomeComponent }, // /page1 affiche le composant A

  { path: 'demo', component: DemoComponent }, // /page2 affiche le composant B

  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut

  { path: '**', component: Page404Component }, // page non trouvée

  { path: 'collegues/:name', component: DetailsCollegueComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    MenuComponent,
    HomeComponent,
    Page404Component,
    DetailsCollegueComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})

export class AppModule { }
