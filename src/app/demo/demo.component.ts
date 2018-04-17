import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  avisAffiche = "";

  unCollegue : Collegue = new Collegue("Collegue 1", 1000, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png");

  impactForm(avis: Avis) {

    if(avis == Avis.AIMER) {
      this.avisAffiche = "Vous avez cliqué sur J'aime"
    } else {
      this.avisAffiche = "Vous avez cliqué sur Je déteste"
    }
  }

}
