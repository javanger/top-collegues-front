import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.scss']
})
export class DetailsCollegueComponent implements OnInit {

  collegue: Collegue;
  constructor(private route: ActivatedRoute) {
    this.collegue.name = route.snapshot.paramMap.get("name");
    console.log(this.collegue);
  }

  ngOnInit() {
  }

}
