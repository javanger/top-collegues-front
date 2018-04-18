import { Component, OnInit, Input } from '@angular/core';
import { Avis, Collegue } from '../../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  avisExprime:string = ""

  score(event:Avis){
    if(event === Avis.AIMER){
      Object.assign(this.collegue, { score : this.collegue.score += 1});
    }
    else if(event === Avis.DETESTER){
      Object.assign(this.collegue, { score : this.collegue.score -= 1});
    }
  }

  @Input() collegue:Collegue;
}
