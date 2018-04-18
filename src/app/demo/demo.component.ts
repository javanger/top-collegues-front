import { Component, OnInit } from "@angular/core";
import { Avis, Collegue } from "../models";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  collegue: Collegue;
  collegues: Array<Collegue> = [];

  constructor() {
    this.collegue = new Collegue(
      "paul",
      45,
      "http://1.bp.blogspot.com/-b66DQHFQuqs/UOl-mEpfyyI/AAAAAAAADds/VbLQxXMM464/s1600/les+simpson+homer+r%C3%A9plique+pinais+doh.jpeg"
    );

    for (let i = 0; i < 12; i++) {
      this.collegues.push(
        new Collegue(
          "Kevin",
          4521,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Re-e364r9e3JXvsZuZG4MPwMFsKYT-tpEJ3yrKVevny9Vrq-Mw"
        )
      );
    }
  }

  ngOnInit() {}
}
