import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../services/collegue.service';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pseudo: string;
  @Input() collegue:Collegue = new Collegue({});

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute, private cService:CollegueService) {
      this.pseudo = route.snapshot.paramMap.get("pseudo")
      this.detail();
  }

  ngOnInit() {

  }

  detail(){
    this.cService.detail(this.pseudo)
    .subscribe(data => {
      this.collegue = data;
   });
  }

  aVote(avis:Avis) {
    this.cService.aVote(this.collegue, avis)
    .subscribe(data =>{
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
