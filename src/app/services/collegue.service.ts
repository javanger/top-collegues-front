import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Avis, Collegue } from '../models';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {

  constructor(private _http:HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    return this._http.get(URL_BACKEND+"/collegues")
    .toPromise()
    .then((data: any) => {  
      return data.map((d:any) => new Collegue(d.pseudo, d.score,d.photo))        
    })
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    return this._http.patch(URL_BACKEND +"/collegues/" + unCollegue.pseudo,
                            {action : avis},
                            httpOptions)
    .toPromise()
    .then((data: any) => {
      return data
    })
  }
}
