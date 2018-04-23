import { Injectable } from "@angular/core";
import { Collegue, Avis } from "../models";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CollegueService {
  constructor(private _http: HttpClient) {
  }

  listerCollegues(): Promise<Collegue[]> {
    return new Promise((done, left) => {
      const URL_API = environment.backendUrl + "/collegues"
      // récupérer la liste des collègues côté serveur
      this._http.get(URL_API)
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          left(error);
        });
    });
  };

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    return new Promise((done, left) => {
      const URL_API = environment.backendUrl + "/collegues/" + unCollegue.pseudo
      this._http.patch(URL_API, { "action": avis })
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          left(error);
        });
    });
  }

  getCollegue(pseudo: string): Promise<Collegue> {
    return new Promise((done, left) => {
      const URL_API = environment.backendUrl + "/collegues/" + pseudo
      this._http.get(URL_API)
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          left(error);
        });
    });
  }

  ajouterCollegue(data): Promise<Collegue> {
    return new Promise((done, left) => {
      const URL_API = environment.backendUrl + "/collegues/nouveau";
      this._http.post(URL_API, data)
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          left(error);
        });
    });
  }
}
