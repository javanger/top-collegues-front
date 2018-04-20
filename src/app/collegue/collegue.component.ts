import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { Avis } from '../models';
import { ColleguesService } from '../services/collegue.service';
import { AvisComponent } from '../avis/avis.component';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent {

  @Input() collegue: Collegue;

  constructor(private serviceCollegue: ColleguesService) { }

  impactForm(avis: Avis) {

    this.serviceCollegue.donnerUnAvis(this.collegue, avis)
      .then(c => this.collegue.score = c.score);

  }
}
