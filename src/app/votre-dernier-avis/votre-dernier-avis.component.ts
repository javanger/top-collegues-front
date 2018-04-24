import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AvisService } from '../services/avis.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";
import { Subscription } from 'rxjs/Subscription';
import { Vote, Avis } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})
export class VotreDernierAvisComponent implements OnInit, OnDestroy {

  actionSub:Subscription
  
  avis:string = "Aucun vote pour le moment"
  constructor(private pCollegue:CollegueService) {
    this.actionSub = this.pCollegue.actionObs.subscribe(
      (data:Vote) => {
          console.log(data)
          if(data.avis === Avis.AIMER){
            this.avis ="J'aime " + data.collegue.pseudo
          }else if(data.avis === Avis.DETESTER){
            this.avis = "Je n'aime pas  " + data.collegue.pseudo
          }
      },
      error => {
         
      },
      () => {
      
      });    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
 
    this.actionSub.unsubscribe();      
  }

}