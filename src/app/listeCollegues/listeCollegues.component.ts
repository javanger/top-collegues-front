import { Component, OnInit, Input } from "@angular/core";
import { Avis, Collegue } from "../models";

@Component({
  selector: "app-listeCollegues",
  templateUrl: "./listeCollegues.component.html",
  styleUrls: ["./listeCollegues.component.scss"]
})
export class ListeColleguesComponent implements OnInit {
  @Input() collegues: Array<Collegue>;

  constructor() { }

  ngOnInit() { }

}
