import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avis } from '../../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  event:Avis;

  constructor() { }

  ngOnInit() {
  }
  
  @Input() score:number;

  isVisiblePos():boolean {
    let visible:boolean = true
    if(this.score >= 1000){
      visible = false
    }
    return visible
  }
  isVisibleNeg():boolean{
    let visible:boolean = true
    if(this.score <= -1000){
      visible = false
    }
    return visible
  }


  @Output() avis: EventEmitter<Avis> = new EventEmitter();

  aimer(){
    this.avis.emit(Avis.AIMER)
  }
  detester(){
    this.avis.emit(Avis.DETESTER)
  }
}
