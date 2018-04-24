import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Collegue, Avis, MonModel, Vote } from '../models';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {

  constructor(private _http:HttpClient, private router: Router) { }

  list():Observable<Collegue[]> { 
    return this._http.get(URL_BACKEND + "collegue")
    .map((data: any) => {
        return data.map((d:any) =>  new Collegue(d))
      })
  }

  top():Observable<Collegue[]> { 
    return this._http.get(URL_BACKEND + "collegue/top")
    .map((data: any) => {
      return data.map((d:any) => new Collegue(d))
    });
  }

  flop():Observable<Collegue[]> { 
    return this._http.get(URL_BACKEND + "collegue/flop")
    .map((data: any) => {
      return data.map((d:any) => new Collegue(d))
    });
  }

  aVote(collegue:Collegue, avis:Avis):Observable<Collegue>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
     };
     return this._http.patch(
      // url d'accès au service
      URL_BACKEND + "collegue/" + collegue.pseudo,
  
      // corps de la réquête
      {
        "action": avis 
      },
      // options de la requête HTTP
       httpOptions
      ).map(data =>  new Collegue(data))
      .do((collegue) => {
        const vote:Vote = new Vote(new Collegue(collegue),avis)
        this.action.next(vote)
      })
  }

  detail(nom:String):Observable<Collegue>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
     };
     return this._http.get(
      // url d'accès au service
      URL_BACKEND + "collegue/" + nom,

      // options de la requête HTTP
      httpOptions
      )
      .map((data: any) => {
        console.log(data)
        return data
      })
  }

  ajouterCollegue(monModel:MonModel):void{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
     };
     this._http.post(
      // url d'accès au service
      URL_BACKEND + "collegue/nouveau",
      // corps de la réquête
      {
        "matricule" : monModel.matricule,
        "pseudo" : monModel.pseudo,
        "url" : monModel.url
      },
      // options de la requête HTTP
      httpOptions
      ).do(() =>
        this.router.navigate(['/accueil'])
      ).subscribe();
  }

  private action = new Subject<Vote>();
  
  get actionObs() {
    return this.action.asObservable();
  }
}