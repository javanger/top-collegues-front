import { Component, OnInit, Input } from '@angular/core';
import { MonModel } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent implements OnInit {

  monModel:MonModel = new MonModel();

  constructor(private cService:CollegueService) {}

  ngOnInit() {
  }

  submit() {
    this.cService.ajouterCollegue(this.monModel);
  }
}
