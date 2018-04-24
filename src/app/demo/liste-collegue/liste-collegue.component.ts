import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Collegue } from '../../models';
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'app-liste-collegue',
  templateUrl: './liste-collegue.component.html',
  styleUrls: ['./liste-collegue.component.scss']
})
export class ListeCollegueComponent implements OnInit {

  listCollegues: Array<Collegue>

  constructor(private _collegue:CollegueService) {    
    this.RecupererCollegue()
  }

  ngOnInit() {
  }

  RecupererCollegue(){
    this._collegue.listerCollegues().subscribe((data: Collegue[]) => {  
      this.listCollegues = data.sort(function(a, b){return b.score - a.score})
    },(error: HttpErrorResponse) => {
      alert("Une erreur est survenue lors de la récuperation des collègues")
      console.log("error", error);
    });
  }
}
