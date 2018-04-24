import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Avis} from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  libelle:string = "";

  @Output() avis = new EventEmitter<Avis>();
  @Input() aimeAtif:boolean;
  @Input() detesteAtif:boolean;

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
