import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';
import { CollegueComponent } from '../collegue/collegue.component';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.scss']
})
export class DetailsCollegueComponent extends CollegueComponent  {

  collegue: Collegue;
  constructor(private route: ActivatedRoute, protected cServ: CollegueService, protected router: Router) {
    super(cServ, router);

    let col = cServ.getCollegue(route.snapshot.paramMap.get("pseudo")).then(data => {
      this.collegue = new Collegue(data['lightCollegue'].pseudo, data['lightCollegue'].score, data['lightCollegue'].urlImage, data.name, data.prenom, data.email, data.adresse);
    });
  }

  ngOnInit() { }

}
