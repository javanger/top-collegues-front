import { Component, OnInit } from '@angular/core';
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
  collegue:Collegue = new Collegue("https://img.stackshare.io/stack/332/7d9825fd0e38f5e05831d226afc41d9c.jpeg","Travis",0)

  score(event:Avis){
    if(event === Avis.AIMER){
      Object.assign(this.collegue, { score : this.collegue.score += 1});
    }
    else if(event === Avis.DETESTER){
      Object.assign(this.collegue, { score : this.collegue.score -= 1});
    }
  }

}
