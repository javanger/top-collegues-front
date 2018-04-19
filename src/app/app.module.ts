import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponent } from './demo/bandeau/bandeau.component';
import { AvisComponent } from './demo/avis/avis.component';
import { CollegueComponent } from './demo/collegue/collegue.component';
import { ListeCollegueComponent } from './demo/liste-collegue/liste-collegue.component';
import { CollegueService } from './services/collegue.service'


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeCollegueComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    CollegueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
