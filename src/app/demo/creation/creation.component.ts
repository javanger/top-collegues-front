import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Collegue } from '../../models';
import { CollegueService } from '../../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

    constructor(private fb: FormBuilder, private _collegue: CollegueService) {
    }

    ngOnInit(){}

    RecuperationForm(pseudo:string, nom:string, prenom:string, email:string, adresse:string){
        let score:number = 0;
        let photo:string = ""; 
        let nouvCollegue:Collegue = new Collegue(pseudo, score, photo, nom, prenom, email, adresse);
        this._collegue.ajouterCollegue(nouvCollegue).then((data: Collegue) => {  
            console.log(data);            
          },(error: HttpErrorResponse) => {
            alert("Erreur lors de la création.")
            console.log("error : ", error);
          });
        
    }    
}
