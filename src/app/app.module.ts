import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { CollegueService } from './services/collegue.service';
import { MenuComponent } from './menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';
import { FlopComponent } from './flop/flop.component';
import { DetailComponent } from './detail/detail.component';
import { ScorePipe } from './pipes/score.pipe';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A

  { path: 'top', component: TopComponent }, // /page2 affiche le composant B

  { path: 'flop', component: FlopComponent },

  { path: 'collegues/:nom', component: DetailComponent },

  { path: '',   redirectTo: '/accueil', pathMatch: 'full' } // redirige vers la route page1 par défaut
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    MenuComponent,
    TopComponent,
    FlopComponent,
    DetailComponent,
    ScorePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
