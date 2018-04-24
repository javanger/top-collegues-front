import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vote } from '../../model';
import {Subscription} from 'rxjs/Subscription';
import { VoteService } from '../../services/vote.service';

@Component({
  selector: 'historique',
  templateUrl: './historique-vote.component.html',
  styleUrls: ['./historique-vote.component.scss']
})
export class HistoriqueVoteComponent implements OnInit, OnDestroy {


  actionSub:Subscription
  list:Array<Vote> = []
  constructor(private pVote:VoteService) { 
    this.actionSub =  this.pVote.listerVote().subscribe(vote =>{
      this.list = vote
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.actionSub.unsubscribe();      
  }


}
