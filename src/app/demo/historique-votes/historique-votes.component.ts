import { Component, OnInit } from '@angular/core';
import { VoteService } from '../../services/vote.service';
import { Vote } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  listVotes: Array<Vote> =  []
  behaveSub:Subscription

  constructor(private _vote:VoteService, private _collegue:CollegueService) { 
    this.RecupererVote()
    this.dynamiserHistorique()
  }

  ngOnInit() {
  }

  RecupererVote(){
    this._vote.listerVotes().subscribe((data: Vote[]) => {  
      this.listVotes = data.concat(this.listVotes).sort(function(a, b){return b.id - a.id}).slice(0,5)
    },(error: HttpErrorResponse) => {
      alert("Une erreur est survenue lors de la récuperation des collègues")
      console.log("error", error);
    });
  }

  dynamiserHistorique() {
    this.behaveSub = this._collegue.BehaveSubject.subscribe(      
      (data:any) => { 
        if (data != null) {  
          this.listVotes.unshift(data)                 
        }
      },
      error => {
        alert("Une erreur est survenue lors de l'affichage")
        console.log("error", error);
      });
  }
}
