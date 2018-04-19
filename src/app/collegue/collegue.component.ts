import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  
@Input() collegue:Collegue;
  

  constructor(private cService:CollegueService) { }

  ngOnInit() {
  }

  changerScore(avis:Avis) {
    this.collegue.score = avis === Avis.AIMER ? this.collegue.score + 10 : this.collegue.score - 10;
  }
  
  aVote(avis:Avis) {
    this.cService.aVote(this.collegue, avis).then(data =>{
      this.collegue = data;
    })
  }

  isAimerActif() {
    return this.collegue.score < 1000;
  }
  
  isDetesterActif(){
    return this.collegue.score > -1000;
  }
}
