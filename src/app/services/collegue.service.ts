import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Collegue, Avis, Vote } from "../models";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import { Subject } from "rxjs/Subject";

const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {
  constructor(private _http: HttpClient, private router: Router) {}

  listerCollegues(): Observable<Collegue[]> {
    return this._http.get(URL_BACKEND + "collegues").map(
      (data: any) => {
        return data.map(
          c =>
            new Collegue(
              c.photo,
              c.matricule,
              c.pseudo,
              c.note,
              c.nom,
              c.prenom,
              c.email,
              c.adresse
            )
        );
      },
      (error: any) => {}
    );
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this._http
      .patch<Collegue>(
        URL_BACKEND + "collegues/" + unCollegue.pseudo,
        {
          action: avis
        },
        httpOptions
      )
      .do(collegue => {
        const vote: Vote = new Vote(collegue, avis, collegue.note);
        this.action.next(vote);
      });
  }

  trouverCollegue(pseudo: string): Observable<Collegue> {
    return this._http.get(URL_BACKEND + "collegues/" + pseudo).map((c: any) => {
      return new Collegue(
        c.photo,
        c.matricule,
        c.pseudo,
        c.note,
        c.nom,
        c.prenom,
        c.email,
        c.adresse
      );
    });
  }

  AjouterCollegue(leCollegue: any): void {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    this._http
      .post(
        URL_BACKEND + "collegues/nouveau",
        {
          matricule: leCollegue.matricule,
          pseudo: leCollegue.pseudo,
          urlImage: leCollegue.URL
        },
        httpOptions
      )
      .do(() => {
        this.router.navigate(["/accueil"]);
      })
      .subscribe();
  }

  private action = new Subject<Vote>();

  get actionObs() {
    return this.action.asObservable();
  }
}
