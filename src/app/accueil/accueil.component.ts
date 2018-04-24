import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  text:string = '';
  collegueFictif: Collegue;
  listeColleguesFictifs:Array<Collegue> = new Array()

  constructor(private cService:CollegueService) { }

  ngOnInit() {
    this.list()
  }

  list() {
    this.cService.list().subscribe(
      data => {
        this.listeColleguesFictifs = data
        this.listeColleguesFictifs.sort((a, b) => {
          let order =  b.score - a.score; 
          if(order === 0) {
            order = a.pseudo.localeCompare(b.pseudo);
          }
          return order
        });
      } 
    )
  }

  changerAvis(avis:Avis) {
    this.text =  'Vous avez cliquer sur ' + avis;
  }

}
