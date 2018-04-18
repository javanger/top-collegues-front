import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() collegue : Collegue;

  choix = " ";
  testAvis(avis: Avis){
 
   if( avis == "detester"){
     this.choix = "vous avez cliquer sur détester";
     
   }else{
     this.choix = "Vous avez cliquer sur aimer";
   }
 
  }

  constructor() { }

  ngOnInit() {
  }

}
