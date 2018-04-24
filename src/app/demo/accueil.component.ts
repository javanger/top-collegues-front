import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) {    
  }

  ngOnInit(): void {
  }
  avisExprime:string = ""
  isHidden:boolean = true

  afficher(event:Avis){
    if (this.isHidden) {
      this.isHidden = !this.isHidden      
      this.avisExprime = "Vous avez cliqué sur "+event.toString()      
    } else {
      this.avisExprime = "Vous avez cliqué sur "+event.toString()      
    }
  }

  changerDePage() {

    // Navigation vers une page
    this.router.navigate(['/acceuil'])
  }
}
