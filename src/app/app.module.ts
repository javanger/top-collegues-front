import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponent } from './demo/bandeau/bandeau.component';
import { AvisComponent } from './demo/avis/avis.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
