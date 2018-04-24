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

  collegue: Collegue = new Collegue(null);
  nom: string;

  constructor(private route: ActivatedRoute, private serviceCollegue: ColleguesService) {
    this.nom = route.snapshot.paramMap.get("nom");
    console.log(this.nom);
  }

  ngOnInit() {
    this.serviceCollegue.getCollegue(this.nom).then((data : any) => {
      this.collegue = data;
      console.log(this.collegue);
    })
  }

  impactForm(avis: Avis) {

    this.serviceCollegue.donnerUnAvis(this.collegue, avis)
      .subscribe(c => this.collegue.score = c.score);

  }

}