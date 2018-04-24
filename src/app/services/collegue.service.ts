import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Collegue, Avis, NewCollegue } from '../models';
import { environment } from '../../environments/environment'
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const URL_BACKEND = environment.backendUrl;

@Injectable()
export class ColleguesService {

  constructor(private _http: HttpClient) { }


  listerCollegues(): Observable<Collegue[]> {

    // récupérer la liste des collègues côté serveur
    return this._http.get(URL_BACKEND + "/collegues")

      .map((data: any) => {

        console.log(data);
        return data.map((s: any) => new Collegue(s));

      }, (error: any) => {

        // cas erreur

      });

  }

  getCollegue(nom : string): Promise<Collegue> {

    // récupérer la liste des collègues côté serveur
    return this._http.get(URL_BACKEND + "/collegues/" + nom)
      .toPromise()
      .then((data: any) => {

        return data;

      }, (error: any) => {

        // cas erreur

      });

  }

  sendNewCollegue(newCollegue : NewCollegue): Promise<Collegue> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this._http
      .post(
        // url d'accès au service
        URL_BACKEND + "/collegues/nouveau",

        // corps de la réquête
        {
          'matricule': newCollegue.matricule,
          'nom': newCollegue.nom,
          'prenom' : newCollegue.prenom,
          'urlImage' : newCollegue.urlImage
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

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {

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

      .map((data: any) => {

        console.log(data);

        return data;

      });

  }

}