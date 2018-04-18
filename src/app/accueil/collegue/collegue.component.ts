import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis} from "../../model"
import { BandeauComponent } from '../bandeau/bandeau.component';
import { AvisComponent} from '../avis/avis.component';
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() collegue:Collegue ;
  constructor(private pCollegue:CollegueService) { 

  }

  ngOnInit() {
  }

  scoreModif(event:Avis){
    if(event == Avis.AIMER){
      this.collegue.score += 10
      this.pCollegue.donnerUnAvis(this.collegue, event)
    }
    else if(event == Avis.DETESTER){
      this.collegue.score -= 5
      this.pCollegue.donnerUnAvis(this.collegue, event)
    }
  }

}
