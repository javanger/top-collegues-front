import { Component, OnInit, Input } from "@angular/core";
import { Avis, Collegue } from "../models";
import { CollegueService } from "../services/collegue.service";


@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.scss"]
})
export class CollegueComponent implements OnInit {
   
  @Input() collegue:Collegue ;
  
  constructor(private cService:CollegueService) {   }

  ngOnInit() {
  
  }
    ajoutAvis(event) {
    if (event == Avis.AIMER) {
      this.collegue.note += 10;
      this.cService.donnerUnAvis(this.collegue, event)
    } else if (event == Avis.DETESTER) {
      this.collegue.note -= 10;
      this.cService.donnerUnAvis(this.collegue, event)
    }
  }
  


}
