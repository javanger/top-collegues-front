import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  ngOnInit(): void {
  }
  avisExprime:string = ""
  isHidden:boolean = true

  afficher(event:Avis){
    if (this.isHidden) {
      this.isHidden = !this.isHidden      
      this.avisExprime = "Vous avez cliqué sur "+event.toString()      
    } else {
      this.avisExprime = "Vous avez cliqué sur "+event.toString()      
    }
  }
}
