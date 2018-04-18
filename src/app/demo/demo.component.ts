import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  text:string = '';
  collegueFictif: Collegue;
  listeColleguesFictifs:Array<Collegue> = new Array() 

  constructor() { }

  ngOnInit() {
    this.collegueFictif = new Collegue("Dio-Sama","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/dio-brando-jojos-bizarre-adventure-all-star-battle-22.2.jpg");
    this.listeColleguesFictifs.push(new Collegue("Dio-Sama","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/dio-brando-jojos-bizarre-adventure-all-star-battle-22.2.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Jonathan Joestar","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/jonathan-joestar-jojos-bizarre-adventure-all-star-battle-81.5.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Jotaro Kujo","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/jotaro-kujo-jojos-bizarre-adventure-all-star-battle-9.02.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Joseph Joestar","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/joseph-joestar-jojos-bizarre-adventure-all-star-battle-5.35.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Kars","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kars-jojos-bizarre-adventure-all-star-battle-47.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Will A Zeppeli","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/will-a-zeppeli-jojos-bizarre-adventure-all-star-battle-91.9.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Caesar Anthonio Zeppeli","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/caesar-anthonio-zeppeli-jojos-bizarre-adventure-all-star-battle-4.02.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Lisa Lisa","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/lisa-lisa-jojos-bizarre-adventure-all-star-battle-8.3.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Mohammed Avdol","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/mohammed-avdol-jojos-bizarre-adventure-all-star-battle-30.6.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Jean Pierre Polnareff","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/jean-pierre-polnareff-jojos-bizarre-adventure-all-star-battle-97.1.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Noriaki Kakyoin","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/noriaki-kakyoin-jojos-bizarre-adventure-all-star-battle-5.16.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Iggy","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/iggy-jojos-bizarre-adventure-all-star-battle-5.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Esidisi","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/esidisi-jojos-bizarre-adventure-all-star-battle-83.5.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Wamuu","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/wamuu-jojos-bizarre-adventure-all-star-battle-1.14.jpg"));
    this.listeColleguesFictifs.push(new Collegue("Joline Cujoh","http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/jolyne-cujoh-jojos-bizarre-adventure-all-star-battle-3.46.jpg"));
  }

  changerAvis(avis:Avis) {
    this.text =  'Vous avez cliquer sur ' + avis;
  }
}
