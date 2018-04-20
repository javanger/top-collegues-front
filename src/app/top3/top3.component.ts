import { Component, OnInit, Input } from '@angular/core';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-top3',
  templateUrl: './top3.component.html',
  styleUrls: ['./top3.component.scss']
})
export class Top3Component implements OnInit {
  constructor(private cService:CollegueService) { }

  ngOnInit() {
  }

  
}
