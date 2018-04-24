import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../../services/collegue.service';
import { Collegue, Avis } from '../../model';
import { AvisComponent} from '../../shared/avis/avis.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'collegue-detail',
  templateUrl: './collegue-detail.component.html',
  styleUrls: ['./collegue-detail.component.scss']
})
export class CollegueDetailComponent implements OnInit {

  pseudo:string
  collegue:Observable<Collegue>
  constructor(private route: ActivatedRoute,private pCollegue:CollegueService) { 
    this.pseudo = route.snapshot.paramMap.get("pseudo")    
    this.collegue = this.pCollegue.trouverCollegue(this.pseudo)
  }

  ngOnInit() {
  }

  scoreModif(event:Avis){
    this.collegue.subscribe(col =>
      this.pCollegue.donnerUnAvis(col, event).subscribe(
        c => col.score = c.score
      ))    
  }

}
