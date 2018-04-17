import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  text:string = ''
  constructor() { }

  ngOnInit() {
  }

  changerAvis(avis:Avis) {
    this.text =  'Vous avez cliquer sur ' + avis;
  }

}
