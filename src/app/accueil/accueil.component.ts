import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from "../model"
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  listeCollegue:Array<Collegue> = []

  constructor(private pCollegue:CollegueService) {
    this.list()
   }

  ngOnInit() {
  }

  list() {
    // utilisation du service
    this.pCollegue.listerCollegues().then(
      c => this.listeCollegue = c
    )
  }
}
