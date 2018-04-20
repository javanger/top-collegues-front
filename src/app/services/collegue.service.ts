import { Injectable } from '@angular/core';
import {Avis, Collegue} from "../model"
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';


// en développement, URL_BACKEND = 'http://localhost:port'
// en mode production, URL_BACKEND = 'http://adresseheroku'
const URL_BACKEND = environment.backendUrl;


@Injectable()
export class CollegueService {

  constructor(private _http:HttpClient, private router: Router) { }

  listerCollegues():Promise<Collegue[]>  {
    return this._http.get(URL_BACKEND + "collegue")
      .toPromise()
      .then((data: any) => {
        return data.map((c:any) => new Collegue(c.pseudo, c.score, c.url)).sort(function(a,b) {
            return b.score > a.score
        });
      });
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
      ).toPromise().then(() =>
        this.router.navigate(['/accueil'])
      )
    }

  trouverCollegue(pseudo:string):Promise<Collegue>{
    return this._http.get(URL_BACKEND + "collegue/" + pseudo)
    .toPromise()
    .then((c: any) => {
       return new Collegue(c.pseudo, c.score, c.url, c.nom, c.prenom, c.adresse, c.email)
    });

  }
  

 donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  return this._http.patch(
    // url d'accès au service
    URL_BACKEND + "collegue/" + unCollegue.pseudo,

    // corps de la réquête
    {
      "action": avis 
    },
    // options de la requête HTTP
    httpOptions
    )
    .toPromise()
    .then((data: any) => {
      return data
    })
  }

}