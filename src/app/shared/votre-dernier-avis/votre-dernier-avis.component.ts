import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollegueService } from '../../services/collegue.service';
import {Subscription} from 'rxjs/Subscription';
import { Vote, Avis } from '../../model';

@Component({
  selector: 'dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})
export class VotreDernierAvisComponent implements OnInit, OnDestroy {

  actionSub:Subscription
  avis:string = "Aucun vote pour le moment"
  constructor(private pCollegue:CollegueService) {
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

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();      
  }

}
