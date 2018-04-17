import { Component, OnInit } from '@angular/core';
import { Collegue, Avis} from "../../model"
import { BandeauComponent } from '../bandeau/bandeau.component';
import { AvisComponent} from '../avis/avis.component';

@Component({
  selector: 'collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  collegue1:Collegue = new Collegue("Henry","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnunuuHmJDF8TEYwIi42a-S6IGBYrlF3vWl7ErBYLScez8Bcx");

  

  constructor() { }

  ngOnInit() {
  }

  scoreModif(event:Avis){
    if(event == Avis.AIMER)
      this.collegue1.score += 1
    else if(event == Avis.DETESTER)
    this.collegue1.score -= 1
  }
}
