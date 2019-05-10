import { Component, OnInit, EventEmitter ,Output } from '@angular/core';
import {Avis} from "../../model"


@Component({
  selector: 'avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() buttonEvent: EventEmitter<Avis> = new EventEmitter();

  aimer(){
    this.buttonEvent.emit(Avis.AIMER)
  }
  detester(){
    this.buttonEvent.emit(Avis.DETESTER)
  }
}
