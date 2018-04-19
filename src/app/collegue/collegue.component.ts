import { Component, OnInit, Input } from "@angular/core";
import { Collegue, Avis } from "../models";
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.scss"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  avis: string;

  constructor(private _cServ: CollegueService) { }
  ngOnInit() { }

  updateScore(avis: Avis) {
    this._cServ.donnerUnAvis(this.collegue, avis)
      .then(data => {
        this.collegue.urlImage = data.urlImage;
        this.collegue.name = data.name;
        this.collegue.score = data.score;

      });
  }
}
