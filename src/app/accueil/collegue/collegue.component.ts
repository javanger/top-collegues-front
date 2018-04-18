import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis} from "../../model"
import { BandeauComponent } from '../bandeau/bandeau.component';
import { AvisComponent} from '../avis/avis.component';

@Component({
  selector: 'collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue:Collegue ;
  constructor() { }

  ngOnInit() {
  }

  scoreModif(event:Avis){
    if(event == Avis.AIMER)
      this.collegue.score += 1
    else if(event == Avis.DETESTER)
    this.collegue.score -= 1
  }

}
