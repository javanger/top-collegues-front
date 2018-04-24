import { Component, OnInit, Input } from "@angular/core";
import { Collegue, Avis } from "../models";
import { ColleguesService } from "../../app/services/collegues.service";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.scss"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  aimerActif = true;
  detesterActif = true;

  // testAvis(avis: Avis){

  //  if( avis == Avis.DETESTER){

  //    this.collegue.score --;

  //  }else{
  //    this.collegue.score ++;
  //  }

  // }
  score(event: Avis) {
    
    if (this.collegue.score < 1000 && this.collegue.score > -1000) {
      this.aimerActif = true;
      this.detesterActif = true;
    }

    console.log(
      this.collegue.score,
      "this.aimerActif=",
      this.aimerActif,
      "this.detesterActif=",
      this.detesterActif
    );

    if (this.collegue.score >= 1000) {
      this.aimerActif = false;
      this.detesterActif = true;
    } else if (this.collegue.score <= -1000) {
      this.detesterActif = false;
      this.aimerActif = true;
    }

    this.sCollegues
      .donnerUnAvis(this.collegue, event)
      .subscribe(c => (this.collegue.score = c.score));
  }

  // aimerActif(){
  //  if(this.collegue.score <= 1000){
  //    console.log("bien");

  //    return this.aimerActifTest ;

  //  }else{
  //    return false
  // }

  //  }

  constructor(private sCollegues: ColleguesService) {}

  ngOnInit() {}
}
