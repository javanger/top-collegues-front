import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { Avis } from '../models';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.scss']
})
export class CollegueComponentComponent {

  avisAffiche : string = "";

  @Input() collegue: Collegue;

  constructor() { }

  impactForm(avis: Avis) {

    if(avis == Avis.AIMER) {
      this.avisAffiche = "Vous avez cliqué sur J'aime"
    } else {
      this.avisAffiche = "Vous avez cliqué sur Je déteste"
    }
  }

}
