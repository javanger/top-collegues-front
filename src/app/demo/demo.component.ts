import { Component, OnInit } from "@angular/core";
import { Avis, Collegue } from "../models";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  collegueF: Collegue;
  listeColleguesF: Array<Collegue> = new Array();


  constructor(private cService:CollegueService) {
     this.list();
  }

  description: string = "Vous n'avez cliqué sur rien";


  ngOnInit() {
  
          
  }
  list(){
    this.cService.listerCollegues().then( l => this.listeColleguesF = l  )}

  ajoutAvis(event) {
    if (event == Avis.AIMER) {
      this.description = " Vous avez cliqué sur J'aime";
    } else if (event == Avis.DETESTER) {
      this.description = " Vous avez cliqué sur Je déteste";
    }
  } 
}
