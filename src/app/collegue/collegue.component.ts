import { Component, OnInit, Input } from "@angular/core";
import { Avis, Collegue } from "../models";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.scss"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;

  constructor(private cService: CollegueService) {}

  ngOnInit() {}
  ajoutAvis(event) {
    this.cService
      .donnerUnAvis(this.collegue, event)
      .then(c => (this.collegue = c));
  }
}
