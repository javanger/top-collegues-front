import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Collegue } from '../models';

import {environment} from '../../environments/environment.prod'

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

}