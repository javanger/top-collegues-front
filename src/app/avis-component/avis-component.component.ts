import { Component, Input, EventEmitter, Output, Inject } from "@angular/core";
import { Avis } from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent {

  constructor() { }

  @Output() avisEvent: EventEmitter<Avis> = new EventEmitter();

  choixAimer(event) {

    this.avisEvent.emit(Avis.AIMER);

  }

  choixDetester(event) {

    this.avisEvent.emit(Avis.DETESTER);

  }

}
