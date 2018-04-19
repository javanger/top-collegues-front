import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Collegue, Avis } from "../models";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";

const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {
  constructor(private _http: HttpClient) {} 

  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this._http
      .get(URL_BACKEND + "collegues")
      .toPromise()
      .then(
        (data: any) => {
          return data.map(c => new Collegue(c.photo, c.nom, c.note));
        },
        (error: any) => {}
      );
     }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    //  Aimer ou Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this._http
      .patch(
        URL_BACKEND + "collegues/" + unCollegue.nom,
        {   action: avis  },
        httpOptions
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }
}
