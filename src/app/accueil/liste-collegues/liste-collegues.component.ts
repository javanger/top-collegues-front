import { Component, OnInit, Input } from '@angular/core';
import { Collegue} from "../../model"
import { CollegueComponent} from '../collegue/collegue.component';

@Component({
  selector: 'liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() list:Array<Collegue>
  constructor() { }

  ngOnInit() {
  }

}
