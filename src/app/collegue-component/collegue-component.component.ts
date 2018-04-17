import { Component, OnInit } from "@angular/core";
import { Avis, Collegue } from "../models";

@Component({
  selector: "app-collegue-component",
  templateUrl: "./collegue-component.component.html",
  styleUrls: ["./collegue-component.component.scss"]
})
export class CollegueComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  c1: Collegue = new Collegue(
    "https://i0.wp.com/mag.thephotoacademy.com/wp-content/uploads/2017/07/Macaca_nigra_self-portrait_large_david-slater_wikimedia.jpg?resize=200%2C200&ssl=1",
    "Singe", 0 );

  ajoutAvis(event) {
    if (event == Avis.AIMER) {
      this.c1.note += 10;
    } else if (event == Avis.DETESTER) {
      this.c1.note -= 10;
    }
  }

}
