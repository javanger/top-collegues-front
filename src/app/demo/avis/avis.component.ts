import { Component, OnInit, EventEmitter ,Output, Input } from '@angular/core';
import {Avis} from "../../model"


@Component({
  selector: 'avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Input() avisScore:number

  constructor() { 
  }

  ngOnInit() {
  }

  @Output() buttonEvent: EventEmitter<Avis> = new EventEmitter();

  aimer(){
    this.buttonEvent.emit(Avis.AIMER)
  }
  detester(){
    this.buttonEvent.emit(Avis.DETESTER)
  }

  isAimerVisible():boolean{
    let visible:boolean = true
    if(this.avisScore >= 1000)
      visible=false
    return visible
  }

  isDetesterVisible():boolean{
    let visible:boolean = true
    if(this.avisScore <= -1000)
      visible=false
    return visible
  }
}
