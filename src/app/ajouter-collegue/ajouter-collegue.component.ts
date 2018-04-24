import { Component, OnInit, Output } from '@angular/core';
import { CollegueService } from '../services/collegue.service';

class MonModel { matricule:string; pseudo:string; URL:string;}
@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.scss']
})
export class AjouterCollegueComponent implements OnInit {

  monModel:MonModel = new MonModel();
    constructor(private cService:CollegueService) {
   
}
  ngOnInit() {
  }

  submit() {
    console.log(this.monModel);
    this.cService.AjouterCollegue(this.monModel);
}



}
