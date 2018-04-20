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

  constructor(private serviceCollegue : ColleguesService) { }

  impactForm(avis: Avis) {

    if(avis == Avis.AIMER) {

      this.collegue.score += 10;
      this.serviceCollegue.donnerUnAvis(this.collegue, avis);
      
    } else {

      this.collegue.score -= 5;
      this.serviceCollegue.donnerUnAvis(this.collegue, avis);
      
    }
  }

}
