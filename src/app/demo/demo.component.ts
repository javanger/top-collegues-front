import { Component, OnInit } from '@angular/core';
import {Avis} from "../model"

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  ligneAfficher:string = "Vous n'avez pas encore cliqué";

  constructor() { }

  ngOnInit() {
  }

  ligne(event:Avis){
    if(event == Avis.AIMER)
      this.ligneAfficher = "Vous avez cliquer sur J'aime"
    else if(event == Avis.DETESTER)
      this.ligneAfficher = "Vous avez cliquer sur Je deteste"
  }
}
