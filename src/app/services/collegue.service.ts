import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Collegue, Avis } from "../models";
import {  HttpClient,  HttpResponse,  HttpErrorResponse,  HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';

const URL_BACKEND = environment.backendUrl;

@Injectable()
export class CollegueService {
  constructor(private _http: HttpClient, private router: Router) {} 

  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this._http
      .get(URL_BACKEND + "collegues")
      .toPromise()
      .then(
        (data: any) => {
          return data.map(c => new Collegue(c.photo,c.matricule, c.pseudo, c.note, c.nom, c.prenom, c.email, c.adresse));
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
        URL_BACKEND + "collegues/" + unCollegue.pseudo,
         {   action: avis  },
        httpOptions
      )
      .toPromise()
      .then((data: any) => {
        return data;
      });
  }

  trouverCollegue(pseudo:string):Promise<Collegue>{
    return this._http.get(URL_BACKEND + "collegues/" + pseudo)
    .toPromise()
    .then((c: any) => {
       return new Collegue(c.photo,c.matricule, c.pseudo, c.note, c.nom, c.prenom, c.email, c.adresse)
    });
  }

  AjouterCollegue(leCollegue:any):void {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    this._http
      .post(
        URL_BACKEND + "collegues/nouveau" ,
         {  
          
            "matricule" : leCollegue.matricule,
            "pseudo": leCollegue.pseudo,
            "urlImage" : leCollegue.URL,
        
           },
        httpOptions
      )
      .toPromise()
      .then(() => { 
        this.router.navigate(['/accueil']) ;
      });
  }


}
