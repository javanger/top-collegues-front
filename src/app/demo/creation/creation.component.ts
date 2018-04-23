import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Collegue } from '../../models';
import { CollegueService } from '../../services/collegue.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent{

  model:any = {}

  constructor(private router: Router, private fb: FormBuilder, private _collegue: CollegueService) {
  }

  RecuperationForm(){

    this._collegue.ajouterCollegue(this.model.matricule, this.model.pseudo, this.model.image).then((data: any) => {  
      console.log(data);   
      this.changerDePage()         
    },(error: HttpErrorResponse) => {
      alert("Erreur lors de la création.")
      console.log("error : ", error);
    }); 
  }
  changerDePage() {
    this.router.navigate(['/accueil'])
  }
}
