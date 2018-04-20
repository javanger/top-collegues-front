import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() listeCollegues:Array<Collegue> = new Array();

  constructor() { }

  ngOnInit() { 
  }

  trier(){
    this.listeCollegues = this.listeCollegues.sort((a, b) => {
      let order =  b.score - a.score; 
      if(order === 0) {
        order = a.nom.localeCompare(b.nom);
      }
      return order
    });
  }

  aChanger(newCollegue:Collegue){
    this.listeCollegues = this.listeCollegues.map(c => {
      if(c.nom === newCollegue.nom) {
        return newCollegue;
      }
      else{
        return c;
      }
    });
  }
}
