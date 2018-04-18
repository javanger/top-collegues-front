import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AccueilComponent } from './accueil/accueil.component';
import { BandeauComponent } from './accueil/bandeau/bandeau.component';
import { AvisComponent} from './accueil/avis/avis.component';
import { CollegueComponent } from './accueil/collegue/collegue.component';
import { ListeColleguesComponent } from './accueil/liste-collegues/liste-collegues.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
