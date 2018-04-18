import { Component, OnInit } from '@angular/core';
import { Collegue} from "../../model"
import { CollegueComponent} from '../collegue/collegue.component';

@Component({
  selector: 'liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  list:Array<Collegue> = [new Collegue("Charles", 0 , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo7lYOkeYbc4A6lC2mRYUWChn-5004gdaJsWWiwMuOqBfynJsj0w"), 
  new Collegue("Henry",995 ,"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/032011/batman_logo.png?itok=Sg7_o5OE"), 
  new Collegue("Matthieu", -995 ,"https://i.pinimg.com/236x/98/20/26/9820264061ce4327515caff9e3dba394--aquaman-cyborgs.jpg"),
  new Collegue("Juliette", 38,"https://www.stoneykins.com/Patterns2/product_images/k/912/Wonder_Woman_Logo_02_tn__36468_std.png"),
  new Collegue("José", -249,"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0012/8465/brand.gif?itok=qNG-TV26"), 
  new Collegue("Paul", 46,"https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0012/4959/brand.gif?itok=EiKwEJuY")]
  constructor() { }

  ngOnInit() {
  }

}
