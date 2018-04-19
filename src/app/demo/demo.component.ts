import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  text:string = '';
  collegueFictif: Collegue;
  listeColleguesFictifs:Array<Collegue> = new Array()

  constructor(private cService:CollegueService) { }

  ngOnInit() {
    this.list()
  }

  list() {
    this.cService.list().then(
      data => {
        this.listeColleguesFictifs = data
        this.listeColleguesFictifs.sort((a, b) => {
          return a.nom.localeCompare(b.nom); 
        });
      } 
    )
  }
  changerAvis(avis:Avis) {
    this.text =  'Vous avez cliquer sur ' + avis;
  }
}
