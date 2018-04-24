import { Component, OnInit } from '@angular/core';
import { Collegue, NewCollegue } from '../models';
import { ColleguesService } from '../services/collegue.service';

@Component({
  selector: 'app-ajout-collegue',
  templateUrl: './ajout-collegue.component.html',
  styleUrls: ['./ajout-collegue.component.scss']
})
export class AjoutCollegueComponent implements OnInit {

  newCollegue: NewCollegue = new NewCollegue(null);

  constructor(private serviceCollegue: ColleguesService) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.newCollegue)

    this.serviceCollegue.sendNewCollegue(this.newCollegue)
    
  }

}
