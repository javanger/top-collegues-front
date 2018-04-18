import { Component, OnInit } from '@angular/core';
import {Avis} from "../model"

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  ligneAfficher:string = "Vous n'avez pas encore cliqué";

  constructor() { }

  ngOnInit() {
  }
}
