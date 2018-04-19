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
          // cas erreur
          left(error);
        });
    });
  };

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    return new Promise((done, left) => {
      const URL_API = environment.backendUrl + "/collegues/" + unCollegue.name
      this._http.patch(URL_API, { "action": avis })
        .toPromise()
        .then((data: any) => {
          done(data);
        }, (error: any) => {
          // cas erreur
          left(error);
        });
    });
  }
}
