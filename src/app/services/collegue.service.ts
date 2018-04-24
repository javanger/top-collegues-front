import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Avis, Collegue, Vote} from '../models';
import { environment} from '../../environments/environment';
import { Observable} from 'rxjs/Observable'
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/map'

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {
  private behaveSubject = new BehaviorSubject(null)

  get BehaveSubject() {
    return this.behaveSubject.asObservable();
  }

  constructor(private _http:HttpClient) { } 

  listerCollegues():Observable<Collegue[]>  {
    return this._http.get(URL_BACKEND+"/collegues").map((data:any[]) => data.map(d=> new Collegue(d.pseudo, d.score,d.photo, d.nom, d.prenom, d.email, d.adresse)))        
  }


  recupererCollegue(pseudo:string):Observable<Collegue>  {
    return this._http.get(URL_BACKEND+"/collegues/" + pseudo)
    .map((data:any) => new Collegue(data.pseudo, data.score, data.photo, data.nom, data.prenom, data.email, data.adresse))
  
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Observable<Collegue>  {
    return this._http.patch<Collegue>(URL_BACKEND +"/collegues/" + unCollegue.pseudo,
                            {action : avis},
                            httpOptions)
    .do( col => this.behaveSubject.next(new Vote(null,avis, col,col.score)))
  }

  ajouterCollegue(matricule:string, pseudo:string, image:string):Observable<Collegue> {    
    return this._http.put<Collegue>(URL_BACKEND +"/collegues/creation",
                           {
                             matricule : matricule,
                             pseudo : pseudo,
                             image : image,
                           },
                           httpOptions)
  }
}
