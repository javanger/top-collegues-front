import { Component, OnInit, Input } from '@angular/core';
import { Avis, Collegue } from "../models";

@Component({
  selector: 'app-lister-collegues',
  templateUrl: './lister-collegues.component.html',
  styleUrls: ['./lister-collegues.component.scss']
})
export class ListerColleguesComponent implements OnInit {

  pseudo:string;
  constructor() { }

@Input() listeCollegues:Array<Collegue>;


  ngOnInit() {
  }

  filter(pseudoInput:string){
this.pseudo = pseudoInput;

  }
  
}
