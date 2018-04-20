import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Mode} from "../../model"
import { CollegueComponent} from '../collegue/collegue.component';
import { CollegueService } from '../../services/collegue.service';

@Component({
  selector: 'liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  @Input() list:Array<Collegue>
  @Input() mode:Mode
  filtreSaisie:string;
  constructor(private pCollegue:CollegueService) { }

  ngOnInit() {
  }

  saisieEffectuee(s:string) {
    this.filtreSaisie = s;
  }

  maj():void{
    if (this.mode === Mode.DEFAULT){
      this.pCollegue.listerCollegues().then(
        collegues => this.list = collegues
      )}
    else if(this.mode === Mode.TOP3){
      this.pCollegue.listerCollegues().then(collegues => {
        let temp:Array<Collegue> = []
        temp.push(collegues[0])
        temp.push(collegues[1])
        temp.push(collegues[2])
        this.list = temp
      })
    }
  }

  
}
