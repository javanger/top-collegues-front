import { Component, OnInit, Input } from '@angular/core';
import { Avis, Collegue } from "../models";

@Component({
  selector: 'app-lister-collegues-component',
  templateUrl: './lister-collegues-component.component.html',
  styleUrls: ['./lister-collegues-component.component.scss']
})
export class ListerColleguesComponentComponent implements OnInit {

  constructor() { }

@Input() listeCollegues:Array<Collegue>;


  ngOnInit() {
  }
  actualiser(){

  }
 

  
}
