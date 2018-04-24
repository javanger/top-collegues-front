import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable'
import { Vote, Collegue } from '../models';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/interval';
import { CollegueService } from './collegue.service';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const URL_BACKEND = environment.backendUrl;

@Injectable()
export class VoteService {

  idVote:number

  constructor(private _http:HttpClient, private _collegue:CollegueService) { 
  }

  listerVotes():Observable<Vote[]> {       
    return Observable.interval(5000)
    .mergeMap(m => this._http.get(URL_BACKEND+"/votes" + (this.idVote ? `?since=${this.idVote}` : ``)))
    .filter((data:any) => data.length > 0)
    .map((data:any[]) => {
      return data.map((d:any) => new Vote(d.id,d.avis,d.collegue,d.score))
    })
    .do((votes : Vote[]) => {
      this.idVote = votes[votes.length-1].id
    })
  }    
}
