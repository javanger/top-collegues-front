import { Component, OnInit } from "@angular/core";
import { Avis, Collegue } from "../models";
import { CollegueService } from '../services/collegue.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  collegue: Collegue;
  collegues: Promise<Array<Collegue>>;
  keyword: string;

  constructor(private cServ: CollegueService) {
    this.collegues = cServ.listerCollegues()
      .then(data => data.map(d => new Collegue(d.pseudo, d.score, d.urlImage)));
  }

  ngOnInit() { }

  filtrer(event: any) {
    this.keyword = event.srcElement.value;
  }
}
