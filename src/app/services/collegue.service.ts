import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Collegue, Avis } from '../models';
import { environment } from '../../environments/environment'
import { HttpHeaders } from "@angular/common/http";

const URL_BACKEND = environment.backendUrl;

@Injectable()
export class ColleguesService {

  constructor(private _http: HttpClient) { }



  listerCollegues(): Promise<Collegue[]> {

    // récupérer la liste des collègues côté serveur
    return this._http.get(URL_BACKEND + "/collegues")
      .toPromise()
      .then((data: any) => {

        console.log(data);
        return data.map((s: any) => new Collegue(s.nom, s.prenom, s.score, s.urlImage));

      }, (error: any) => {

        // cas erreur

      });

  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    // TODO Aimer ou Détester un collègue côté serveur
    return this._http
      .patch(
        // url d'accès au service
        URL_BACKEND + "/collegues/" + unCollegue.nom,

        // corps de la réquête
        {
          'action': avis
        },

        // options de la requête HTTP
        httpOptions
      )
      .toPromise()
      .then((data: any) => {
        console.log(data);

        return data;
      });

  }

}