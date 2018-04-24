import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avis, Collegue } from '../../models';
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  constructor(private _collegue:CollegueService) { }

  ngOnInit() {
  }

  score(event:Avis){
    if(event === Avis.AIMER){
      this._collegue.donnerUnAvis(this.collegue, event).subscribe((data: Collegue) => {  
      this.collegue = data
    },(error: HttpErrorResponse) => {
      alert("Une erreur lors de la modification du score de : " +this.collegue.pseudo)
      console.log("error : ", error);
    });
    }
    else if(event === Avis.DETESTER){
      this._collegue.donnerUnAvis(this.collegue, event).subscribe((data: Collegue) => {  
        console.log("Collegue : " + data);        
      },(error: HttpErrorResponse) => {
        alert("Une erreur lors de la modification du score de : " +this.collegue.pseudo)
        console.log("error : ", error);
      });
    }
  }

  @Input() collegue:Collegue;

  @Output() detail:EventEmitter<String> = new EventEmitter<String>();
}
