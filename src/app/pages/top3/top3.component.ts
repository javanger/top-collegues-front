import { Component, OnInit } from '@angular/core';
import { Avis, Collegue, Mode } from "../../model"
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'top3',
  templateUrl: './top3.component.html',
  styleUrls: ['./top3.component.scss']
})
export class Top3Component implements OnInit {

  listeCollegue:Array<Collegue> =[]
  top3:Array<Collegue>
  mode:Mode = Mode.TOP3


  constructor(private pCollegue:CollegueService) {
    this.list()
   }

  ngOnInit() {
  }

  list() {
    // utilisation du service
    this.pCollegue.listerCollegues().then(
      c => this.listeCollegue = c
    ).then(() => {
      this.top3 = []
      this.top3.push(this.listeCollegue[0])
      this.top3.push(this.listeCollegue[1])
      this.top3.push(this.listeCollegue[2])
    })
    
  }
}
