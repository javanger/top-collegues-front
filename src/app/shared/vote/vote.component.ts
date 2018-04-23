import { Component, OnInit, Input } from '@angular/core';
import { Vote, Avis } from '../../model';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  @Input() vote:Vote
  message:string
  constructor() { }

  ngOnInit() {
    if(this.vote.avis === Avis.DETESTER){
      this.message = this.vote.collegue.pseudo + " est détesté, cette personne a désormais un score de " + this.vote.score + " :("
    }else if(this.vote.avis === Avis.AIMER){
      this.message = this.vote.collegue.pseudo + " est aimé, cette personne a désormais un score de " + this.vote.score + " :)"
    }
  }

}
