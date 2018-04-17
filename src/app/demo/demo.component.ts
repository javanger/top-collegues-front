import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  avisAffiche = "";

  impactForm(avis: Avis) {

    if(avis == Avis.AIMER) {
      this.avisAffiche = "Vous avez cliqué sur J'aime"
    } else {
      this.avisAffiche = "Vous avez cliqué sur Je déteste"
    }
  }

}
