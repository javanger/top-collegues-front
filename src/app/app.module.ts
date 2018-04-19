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

// services
import { CollegueService } from './services/collegue.service';

@NgModule({
  declarations: [
  AppComponent,
  DemoComponent,
  BandeauComponent,
  AvisComponent,
  CollegueComponent,
  ListeColleguesComponent,
  HistoriqueVotesComponent
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})

export class AppModule {}
