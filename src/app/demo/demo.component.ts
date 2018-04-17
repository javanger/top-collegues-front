import { Component, OnInit } from '@angular/core';
import {Avis} from "../model"

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  ligneAfficher:string = "Vous n'avez pas encore cliqué";

  constructor() { }

  ngOnInit() {
  }
}
