import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.scss']
})
export class BandeauComponent implements OnInit {

  titre:string;
  description:string;
  constructor() {
    this.titre = "Application Top Collègues";
    this.description = "Les meilleurs collègues du monde";
   }

  ngOnInit() {
  }

}
