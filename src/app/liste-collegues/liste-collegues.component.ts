import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  listeCollegues: Collegue[];

  constructor() {
    this.listeCollegues = [new Collegue("Collegue 1", 0, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png"),
    new Collegue("Collegue 2", 0, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png"),
    new Collegue("Collegue 3", 0, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png"),
    new Collegue("Collegue 4", 0, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png"),
    new Collegue("Collegue 5", 0, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png"),
    new Collegue("Collegue 6", 0, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png"),
    new Collegue("Collegue 7", 0, "http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png")];
  }

  ngOnInit() {
  }

}
