import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Vote, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})

export class VotreDernierAvisComponent implements OnInit, OnDestroy{

  avis:string = "Aucun vote pour le moment"
  actionSub:Subscription

  constructor(private pCollegue:CollegueService){ 
    // abonnement du composant aux notifications
    this.actionSub = this.pCollegue.actionObs.subscribe(
    (data:Vote) => {
      // donnée propagée par le service via next(data)
      if(data.avis === Avis.AIMER){
        this.avis ="J'aime " + data.collegue.pseudo
      }else if(data.avis === Avis.DETESTER){
        this.avis = "Je n'aime pas  " + data.collegue.pseudo
      }
    },
    error => {
        // signal d'erreur
    },
    () => {
    // signal de fin
    });    
  }

  ngOnInit() {
  }

  ngOnDestroy():void {
    this.actionSub.unsubscribe();
  }
}
