import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Collegue, Avis } from "../models";
import { CollegueService } from "../services/collegue.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.scss"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  avis: string;
  @Output() details: EventEmitter<Collegue> = new EventEmitter<Collegue>();

  constructor(protected _cServ: CollegueService, protected router: Router) { }
  ngOnInit() { }

 updateScore(avis: Avis) {
    this._cServ.donnerUnAvis(this.collegue, avis)
      .then(data => {
        this.collegue.urlImage = data.urlImage;
        this.collegue.pseudo = data.pseudo;
        this.collegue.score = data.score;
      });
  }

}
