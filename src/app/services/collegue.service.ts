import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Collegue, Avis } from '../models';
import { environment } from '../../environments/environment';

const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {

  constructor(private _http:HttpClient) { }

  list():Promise<Collegue[]> { 
    return this._http.get(URL_BACKEND + "collegue")
    .toPromise()
    .then((data: any) => {
      return data.map((d:any) => new Collegue(d))
    });
  }

  top():Promise<Collegue[]> { 
    return this._http.get(URL_BACKEND + "collegue/top")
    .toPromise()
    .then((data: any) => {
      return data.map((d:any) => new Collegue(d))
    });
  }

  flop():Promise<Collegue[]> { 
    return this._http.get(URL_BACKEND + "collegue/flop")
    .toPromise()
    .then((data: any) => {
      return data.map((d:any) => new Collegue(d))
    });
  }

  aVote(collegue:Collegue, avis:Avis):Promise<Collegue>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
     };
     return this._http.patch(
      // url d'accès au service
      URL_BACKEND + "collegue/" + collegue.nom,
  
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

  detail(nom:String):Promise<Collegue>{
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
      .toPromise()
      .then((data: any) => {
        console.log(data)
        return data
      })
  }
}
