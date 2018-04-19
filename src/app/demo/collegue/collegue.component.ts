import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, Input } from '@angular/core';
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
      this._collegue.donnerUnAvis(this.collegue, event).then((data: Collegue) => {  
      this.collegue = data
    },(error: HttpErrorResponse) => {
      alert("Une erreur lors de la modification du score de : " +this.collegue.pseudo)
      console.log("error : ", error);
    });
      Object.assign(this.collegue, { score : this.collegue.score += 10});
    }
    else if(event === Avis.DETESTER){
      this._collegue.donnerUnAvis(this.collegue, event).then((data: Collegue) => {  
        this.collegue = data
      },(error: HttpErrorResponse) => {
        alert("Une erreur lors de la modification du score de : " +this.collegue.pseudo)
        console.log("error : ", error);
      });
      Object.assign(this.collegue, { score : this.collegue.score -= 5});
    }
  }

  @Input() collegue:Collegue;
}
