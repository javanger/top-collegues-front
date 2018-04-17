import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.scss']
})
export class AvisComponentComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
  
  
  @Output() formEvent: EventEmitter<Avis> = new EventEmitter();

  sendAimer() {
    
    this.formEvent.emit(Avis.AIMER);
  }
  
  sendDetester() {
    
    this.formEvent.emit(Avis.DETESTER);
  }
}
