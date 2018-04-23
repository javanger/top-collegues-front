import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { ColleguesService } from '../services/collegue.service';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})

export class ListeColleguesComponent implements OnInit {

  @Input() listeCollegues: Array<Collegue>;

  constructor(private serviceCollegue: ColleguesService) {

  }

  ngOnInit() {
    this.serviceCollegue.listerCollegues().then((data: any) => {
      this.listeCollegues = data;
    })
  }

}
