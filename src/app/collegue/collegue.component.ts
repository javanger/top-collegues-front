import { Component, OnInit, Input } from "@angular/core";
import { Avis, Collegue } from "../models";
import { CollegueService } from "../services/collegue.service";
import { AvisService } from "../services/avis.service";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.scss"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;

  constructor(private cService: CollegueService, private aService:AvisService) {}

  ngOnInit() {}

  ajoutAvis(event:Avis) {
    this.cService
      .donnerUnAvis(this.collegue, event)
      .subscribe(c => (this.collegue.note = c.note));
  }

 
  
}
