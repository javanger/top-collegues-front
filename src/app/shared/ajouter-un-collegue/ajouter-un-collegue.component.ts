import { Component, OnInit } from '@angular/core';
import { Collegue } from '../../model'
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'ajouterCollegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {

  col:any = {};

  constructor(private pCollegue: CollegueService) { }

  ngOnInit() {
  }

  recuperationForm(){
    this.pCollegue.ajouterCollegue(this.col)
  }    

}
