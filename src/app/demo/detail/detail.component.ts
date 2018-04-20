import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../../services/collegue.service';
import { Collegue } from '../../models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

pseudo: string;

  constructor(private route: ActivatedRoute, private _collegue:CollegueService) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")
    this.AfficherDetails();  
  }
  ngOnInit() {
  }

  AfficherDetails(){
    this._collegue.recupererCollegue(this.pseudo).then((data: Collegue) => {  
      console.log(data);      
      this.colleguedetail = data;
      console.log(this.colleguedetail);
      
    },(error: HttpErrorResponse) => {
      alert("Une erreur est survenue lors de la récuperation du collègue")
      console.log("error", error);
    });    
  } 

  @Input() colleguedetail:Collegue;
}
