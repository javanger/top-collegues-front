import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Avis} from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {
  libelle:string = "";

  @Output() avis = new EventEmitter<Avis>();

  constructor() {}

  ngOnInit() {
  }

  aimer() {
    this.avis.emit(Avis.AIMER);
  }

  detester() {
    this.avis.emit(Avis.DETESTER);
  }
}
