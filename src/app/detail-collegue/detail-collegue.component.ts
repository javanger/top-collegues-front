import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { ColleguesService } from '../services/collegue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  nom: string;

  constructor(private route: ActivatedRoute, private serviceCollegue: ColleguesService) {
    this.nom = route.snapshot.paramMap.get("nom");
  }

  ngOnInit() {
    this.serviceCollegue.getCollegues(this.nom).then((data : any) => {
      this.collegue = data;
    })
  }

  impactForm(avis: Avis) {

    this.serviceCollegue.donnerUnAvis(this.collegue, avis)
      .then(c => this.collegue.score = c.score);

  }

}
