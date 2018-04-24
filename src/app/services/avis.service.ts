import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CollegueService } from "./collegue.service";
import { Observable } from "rxjs/Observable";
import { Vote, Avis } from "../models";
import "rxjs/add/observable/interval";
import 'rxjs/add/operator/mergeMap'

const URL_BACKEND = environment.backendUrl;

@Injectable()
export class AvisService {
  votesSubject = new BehaviorSubject([]);

  constructor(
    private _http: HttpClient,
    private _collegueService: CollegueService
  ) {
    Observable.interval(5000)
      .mergeMap(i =>
        this._http.get(URL_BACKEND + "vote").map((data: any) => {
          return data.map(
            (a: any) => new Vote(a.collegue, Avis[`${a.avis}`], a.score)
          );
        })
      )
      .subscribe(tabVotes => this.votesSubject.next(tabVotes));

    this._collegueService.actionObs.subscribe(nouveauVote => {
      const tabVotes = this.votesSubject.getValue();
      tabVotes.unshift(nouveauVote);
      this.votesSubject.next(tabVotes);
    });
  }

  listerVote(): Observable<Vote[]> {
    return this.votesSubject.asObservable();
  }
}
