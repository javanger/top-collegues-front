import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from "../models";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() collegue:Collegue;
  avis:string;
  
  constructor() { 
   }

  ngOnInit() {}

  afficher(value:string) {
    this.avis = `Vous avez cliquez sur ${value}`;
  }
}
