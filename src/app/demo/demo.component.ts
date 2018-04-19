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
  collegues: Array<Collegue> = [];

  constructor(private cServ: CollegueService) {
    cServ.listerCollegues()
      .then(data => {
        data.map(d => new Collegue(d.name, d.score, d.urlImage)).forEach(c => {
          this.collegues.push(c);
        });
      });
  }

  ngOnInit() { }
}
