import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  text:string = '';
  collegueFictif: Collegue;
  listeColleguesFictifs:Array<Collegue> = new Array()

  constructor(private cService:CollegueService) { }

  ngOnInit() {
    this.top()
  }

  top() {
    this.cService.top().then(
      data => {
        this.listeColleguesFictifs = data
        this.listeColleguesFictifs.sort((a, b) => {
          return b.score - a.score; 
        });
      } 
    )
  }
  
  changerAvis(avis:Avis) {
    this.text =  'Vous avez cliquer sur ' + avis;
  }
}

