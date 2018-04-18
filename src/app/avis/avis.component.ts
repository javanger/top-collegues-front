import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Avis } from "../models";

@Component({
  selector: "app-avis",
  templateUrl: "./avis.component.html",
  styleUrls: ["./avis.component.scss"]
})
export class AvisComponent implements OnInit {
 
  @Input() note:number;

  constructor() {}

  ngOnInit() {}

  @Output() formEvent: EventEmitter<Avis> = new EventEmitter();

  sendAimer() {
    this.formEvent.emit(Avis.AIMER);
  }

  sendDetester() {
    this.formEvent.emit(Avis.DETESTER);
  }

  isVisibleSup():boolean {
    let oui: boolean = true;
        if (this.note >= 1000) {
      oui = false;
    } return oui;
  }

    isVisibleInf():boolean{
      let oui: boolean = true;
      if (this.note <= -1000) {
        oui = false;
    } return oui; 
    
  }
}
