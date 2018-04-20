import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  
@Input() collegue:Collegue;
@Output() newCollegue = new EventEmitter<Collegue>();
  

  constructor(private cService:CollegueService) { }

  ngOnInit() {
  }
  
  aVote(avis:Avis) {
    this.cService.aVote(this.collegue, avis).then(data =>{
      this.collegue = data;
      this.newCollegue.emit(this.collegue);
    })
  }

  isAimerActif() {
    return this.collegue.score < 1000;
  }
  
  isDetesterActif(){
    return this.collegue.score > -1000;
  }
}
