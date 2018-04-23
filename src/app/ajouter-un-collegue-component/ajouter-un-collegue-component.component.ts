import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollegueService } from '../services/collegue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-un-collegue-component',
  templateUrl: './ajouter-un-collegue-component.component.html',
  styleUrls: ['./ajouter-un-collegue-component.component.scss']
})
export class AjouterUnCollegueComponentComponent implements OnInit {
  matricule: string;
  collegue:Collegue = new Collegue("", 0, "");
  message: string;

  constructor(private cServ:CollegueService, private router: Router) {}

  ngOnInit() {}

  submit(values: string) {
    console.log(values);
    this.cServ.ajouterCollegue(values).then(data => {
      this.router.navigate(['/demo']);
    }, error => {
      this.message = error.error;
    });
  }
}
