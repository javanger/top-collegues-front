import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  @Output() avis: EventEmitter<Avis> = new EventEmitter();

  aimer(event){
    this.avis.emit(Avis.AIMER);
  }

  detester(event){
    this.avis.emit(Avis.DETESTER);
  }

  constructor() { }

  ngOnInit() {
  }

}
