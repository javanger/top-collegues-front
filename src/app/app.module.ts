import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AccueilComponent } from './demo/accueil.component';
import { BandeauComponent } from './demo/bandeau/bandeau.component';
import { AvisComponent } from './demo/avis/avis.component';
import { CollegueComponent } from './demo/collegue/collegue.component';
import { ListeCollegueComponent } from './demo/liste-collegue/liste-collegue.component';
import { CollegueService } from './services/collegue.service'
import { VoteService } from './services/vote.service'
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './demo/creation/creation.component';
import { DetailComponent } from './demo/detail/detail.component';
import { PageNonTrouveeComponent } from './demo/page-non-trouvee/page-non-trouvee.component';
import { VotreDernierAvisComponent } from './demo/votre-dernier-avis/votre-dernier-avis.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScorePipe } from './pipes/score.pipe'
import { FilterPipe } from './pipes/filter.pipe';
import { HistoriqueVotesComponent } from './demo/historique-votes/historique-votes.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'creation', component: CreationComponent },  
  { path: 'collegues/:pseudo',  component: DetailComponent },
  { path: '**',  component: PageNonTrouveeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeCollegueComponent,
    CreationComponent,
    DetailComponent,
    PageNonTrouveeComponent,
    VotreDernierAvisComponent,    
    ScorePipe,
    FilterPipe,
    HistoriqueVotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot() 
  ],
  providers: [
    CollegueService,
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
