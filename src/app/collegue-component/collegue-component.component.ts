import { Component, OnInit, Input } from "@angular/core";
import { Avis, Collegue } from "../models";


@Component({
  selector: "app-collegue-component",
  templateUrl: "./collegue-component.component.html",
  styleUrls: ["./collegue-component.component.scss"]
})
export class CollegueComponentComponent implements OnInit {
   
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
