import { Component, OnInit } from '@angular/core';
import {Avis, Collegue} from "../models";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  collegue:Collegue;

  constructor() {
    this.collegue = new Collegue(
      "Kevin", 
      4521,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Re-e364r9e3JXvsZuZG4MPwMFsKYT-tpEJ3yrKVevny9Vrq-Mw"); 
   }

  ngOnInit() {
  }


}
