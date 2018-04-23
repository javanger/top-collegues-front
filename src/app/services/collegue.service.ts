import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Avis, Collegue, Vote} from "../model"
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/interval';
import {Subject} from "rxjs/Subject";


// en développement, URL_BACKEND = 'http://localhost:port'
// en mode production, URL_BACKEND = 'http://adresseheroku'
const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {

  constructor(private _http:HttpClient, private router: Router) { }

  listerCollegues():Observable<Collegue[]>  {
    return this._http.get(URL_BACKEND + "collegue")
      .map((data: any) => {
        return data.map((c:any) => new Collegue(c.pseudo, c.score, c.url)).sort(function(a,b) {
            return b.score > a.score
        });
      })
  }

  ajouterCollegue(col:any):void{    
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
        "matricule": col.matricule, 
        "pseudo": col.pseudo, 
        "url": col.url 
      },
      // options de la requête HTTP
      httpOptions
      ).do(() =>
        this.router.navigate(['/accueil'])
      ).subscribe();
    }

  trouverCollegue(pseudo:string):Observable<Collegue>{
    return this._http.get(URL_BACKEND + "collegue/" + pseudo)
      .map((c: any) => new Collegue(c.pseudo, c.score, c.url, c.nom, c.prenom, c.adresse, c.email))
  }

  private action = new Subject<Vote>();
  
  get actionObs() {
    return this.action.asObservable();
  }

 donnerUnAvis(unCollegue:Collegue, avis:Avis):Observable<Collegue>  {
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  
  return this._http.patch<Collegue>(
    // url d'accès au service
    URL_BACKEND + "collegue/" + unCollegue.pseudo,
    // corps de la réquête
    {
      "action": avis 
    },
    // options de la requête HTTP
    httpOptions
    ).do((collegue) => {
      const vote:Vote = new Vote(collegue,avis,collegue.score)
      this.action.next(vote)
    })
  }

}