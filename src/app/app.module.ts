import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoComponent } from './demo/demo.component';
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

const appRoutes: Routes = [

  { path: 'accueil', component: DemoComponent }, // /page1 affiche le composant A
  { path: 'top3', component: Top3Component }, // /page2 affiche le composant B
  { path: 'collegues/:pseudo', component: DetailsComponent },
  
  { path: '',   redirectTo: '/top3', pathMatch: 'full' }, // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListerColleguesComponent,
    MenuComponent,
    DetailsComponent,
    Top3Component,
    NotePipe

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
