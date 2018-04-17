import { Component, OnInit } from '@angular/core';
import { Collegue } from '../../models';

@Component({
  selector: 'app-liste-collegue',
  templateUrl: './liste-collegue.component.html',
  styleUrls: ['./liste-collegue.component.scss']
})
export class ListeCollegueComponent implements OnInit {

  list: Array<Collegue> = [new Collegue("https://img.stackshare.io/stack/332/7d9825fd0e38f5e05831d226afc41d9c.jpeg","travis1",100), 
                           new Collegue("https://img.stackshare.io/stack/332/7d9825fd0e38f5e05831d226afc41d9c.jpeg","travis2",-500), 
                           new Collegue("https://img.stackshare.io/stack/332/7d9825fd0e38f5e05831d226afc41d9c.jpeg","travis3",250), 
                           new Collegue("https://img.stackshare.io/stack/332/7d9825fd0e38f5e05831d226afc41d9c.jpeg","travis4",10), 
                           new Collegue("https://img.stackshare.io/stack/332/7d9825fd0e38f5e05831d226afc41d9c.jpeg","travis5",-1000), 
                           new Collegue("https://img.stackshare.io/stack/332/7d9825fd0e38f5e05831d226afc41d9c.jpeg","travis6",1000)];
  constructor() { }

  ngOnInit() {
  }

}
