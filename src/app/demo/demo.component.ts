import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  description: string = "Vous n'avez cliqué sur rien";
  ngOnInit() {
  }

  ajoutAvis(event){
    if( event == Avis.AIMER){

      this.description =" Vous avez cliqué sur J'aime";
    }else if(event == Avis.DETESTER) {

      this.description =" Vous avez cliqué sur Je déteste";
    }
  }

}
