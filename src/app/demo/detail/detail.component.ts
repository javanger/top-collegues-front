import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../../services/collegue.service';
import { Collegue, Avis } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

pseudo: string;

  constructor(private route: ActivatedRoute, private _collegue:CollegueService) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")
    this.AfficherDetails();  
  }
  ngOnInit() {
  }

  AfficherDetails(){
    this._collegue.recupererCollegue(this.pseudo).then((data: Collegue) => {  
      console.log(data);      
      this.colleguedetail = data;
      console.log(this.colleguedetail);
      
    },(error: HttpErrorResponse) => {
      alert("Une erreur est survenue lors de la récuperation du collègue")
      console.log("error", error);
    });    
  } 

  @Input() colleguedetail:Collegue;

  score(event:Avis){
    if(event === Avis.AIMER){
      this._collegue.donnerUnAvis(this.colleguedetail, event).then((data: Collegue) => {  
      this.colleguedetail = data
    },(error: HttpErrorResponse) => {
      alert("Une erreur lors de la modification du score de : " +this.colleguedetail.pseudo)
      console.log("error : ", error);
    });
      Object.assign(this.colleguedetail, { score : this.colleguedetail.score += 10});
    }
    else if(event === Avis.DETESTER){
      this._collegue.donnerUnAvis(this.colleguedetail, event).then((data: Collegue) => {  
        console.log("Collegue : " + data);        
      },(error: HttpErrorResponse) => {
        alert("Une erreur lors de la modification du score de : " +this.colleguedetail.pseudo)
        console.log("error : ", error);
      });
      Object.assign(this.colleguedetail, { score : this.colleguedetail.score -= 5});
    }
  }

  @Output() detail:EventEmitter<String> = new EventEmitter<String>();
}
