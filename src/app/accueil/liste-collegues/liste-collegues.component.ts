import { Component, OnInit, Input } from '@angular/core';
import { Collegue} from "../../model"
import { CollegueComponent} from '../collegue/collegue.component';
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() list:Array<Collegue>
  constructor(private pCollegue:CollegueService) { }

  ngOnInit() {
  }

  maj():void{
    this.pCollegue.listerCollegues().then(
      collegues => this.list = collegues
    )
  }

  
}
