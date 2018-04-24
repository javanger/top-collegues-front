import { Component, OnInit, Input } from '@angular/core';
import { Collegue} from '../models';
import { ColleguesService } from '../../app/services/collegues.service';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {
  searchText : string = "";

  @Input() collegues : Array<Collegue>;

  constructor(private sCollegues:ColleguesService) { 
  }

  ngOnInit() {
    this.sCollegues.listerCollegues().subscribe((data:any) => {
     this.collegues = data;
    })
  }

}
