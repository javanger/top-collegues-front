import { Component, OnInit, Input } from "@angular/core";
import { Avis, Collegue } from "../models";
import { CollegueService } from "../services/collegue.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  @Input() collegue:Collegue;
  pseudo:string;

  constructor( private route: ActivatedRoute,  private cService: CollegueService) {
    this.pseudo = route.snapshot.paramMap.get("pseudo");
   this.cService.trouverCollegue(this.pseudo).then( l => (
    this.collegue = l));
  }

  ngOnInit() {}

  ajoutAvis(event) {
    this.cService
      .donnerUnAvis(this.collegue, event)
      .then(c => (this.collegue = c));
  }
    
  }

