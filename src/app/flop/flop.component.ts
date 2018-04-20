import { Component, OnInit } from '@angular/core';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-flop',
  templateUrl: './flop.component.html',
  styleUrls: ['./flop.component.scss']
})
export class FlopComponent implements OnInit {
  text:string = '';
  collegueFictif: Collegue;
  listeColleguesFictifs:Array<Collegue> = new Array()

  constructor(private cService:CollegueService) { }

  ngOnInit() {
    this.flop()
  }

  flop() {
    this.cService.flop().then(
      data => {
        this.listeColleguesFictifs = data
        this.listeColleguesFictifs.sort((a, b) => {
          return a.score - b.score; 
        });
      } 
    )
  }
  
  changerAvis(avis:Avis) {
    this.text =  'Vous avez cliquer sur ' + avis;
  }
}
