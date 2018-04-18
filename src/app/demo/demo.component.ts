import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  collegueDefaut : Collegue = new Collegue("paul", "http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png", 5);

  choix = " ";
 testAvis(avis: Avis){

  if( avis == "detester"){
    this.choix = "vous avez cliquer sur détester";
  }else{
    this.choix = "Vous avez cliquer sur aimer";
  }

 }

  constructor() { }

  ngOnInit() {
  }

}
