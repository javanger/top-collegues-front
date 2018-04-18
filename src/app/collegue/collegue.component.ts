import { Component, OnInit, Input } from "@angular/core";
import { Avis, Collegue } from "../models";


@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.scss"]
})
export class CollegueComponent implements OnInit {
   
  @Input() collegue:Collegue;
    constructor() {
  }
  ngOnInit() {
  
  }
  

 

  ajoutAvis(event) {
    if (event == Avis.AIMER) {
      this.collegue.note += 10;
    } else if (event == Avis.DETESTER) {
      this.collegue.note -= 10;
    }
  }
}
