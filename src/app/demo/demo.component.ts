import { Component, OnInit } from "@angular/core";
import { Avis, Collegue } from "../models";
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  collegue: Collegue;
  collegues: Array<Collegue> = [];

  constructor(private cServ: CollegueService) {
    //this.collegues = null;
    cServ.listerCollegues()
      .then(data => {
        //console.log(data);
        data.map(d => new Collegue(d.name, d.score, d.urlImage)).forEach(c => {
          this.collegues.push(c);
        });
        console.log(this.collegues);
      });

    /*cServ.donnerUnAvis(new Collegue("Kevin", 10, ""), Avis.AIMER)
      .then(data => {
        console.log(data);
      });*/
  }

  ngOnInit() { }
}
