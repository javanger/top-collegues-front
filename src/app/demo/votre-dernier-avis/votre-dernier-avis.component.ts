import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CollegueService } from '../../services/collegue.service';
import { Avis } from '../../models';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})
export class VotreDernierAvisComponent implements OnInit, OnDestroy{

  behaveSub:Subscription
  @Input() affiche:string

  constructor(private _collegue:CollegueService) {
    this.behaveSub = this._collegue.BehaveSubject.subscribe(      
      (data:any) => {  
        if (data == null) {
          this.affiche = "Aucun vote pour le moment"
        } else {
          if (data.avis == Avis.AIMER) {
            this.affiche = "J'aime " + data.collegue.prenom
          }else if(data.avis == Avis.DETESTER){
            this.affiche = "J'aime pas " + data.collegue.prenom
          }
        }      
      },
      error => {
        alert("Une erreur est survenue lors de l'affichage")
        console.log("error", error);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.behaveSub.unsubscribe()  
  }

}
