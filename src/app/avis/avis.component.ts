import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Avis} from "../models";
@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() choix:EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  like() {
    this.choix.emit(Avis.AIMER);
  }
  
  unlike() {
    this.choix.emit(Avis.DETESTER);
  }

}
