import { Component, OnInit } from "@angular/core";
import { Avis, Collegue } from "../models";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  collegueF: Collegue;
  listeColleguesF: Array<Collegue> = new Array();

  constructor() {}

  description: string = "Vous n'avez cliqué sur rien";

  ngOnInit() {
    this.collegueF = new Collegue("https://i0.wp.com/mag.thephotoacademy.com/wp-content/uploads/2017/07/Macaca_nigra_self-portrait_large_david-slater_wikimedia.jpg?resize=200%2C200&ssl=1",
      "Singe" );
    this.listeColleguesF.push( new Collegue("https://gaiasphere.fr/wordpress/wp-content/uploads/2007/12/paresseux-400x200.jpg", "Paresseux"));
    this.listeColleguesF.push( new Collegue("https://www.quizz.biz/uploads/quizz/1085957/5_C27MX.jpg", "Mandrill"));
    this.listeColleguesF.push( new Collegue("http://fr.web.img6.acsta.net/c_400_200/newsv7/17/05/16/10/59/480832.jpg", "César"));
    this.listeColleguesF.push( new Collegue("https://jesavaispas.com/wp-content/uploads/2016/03/Koala-400x200.jpg", "Koala")); 
    this.listeColleguesF.push( new Collegue("https://dkm-tv.com/wp-content/uploads/2015/04/bonobo-400x200.jpg", "Singe"));
    this.listeColleguesF.push( new Collegue("https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F29582080%2F144893382253%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C49%2C2048%2C1024&s=94fe34b3820a5787d978c83988785dd8", "Capucin"));
          
  }

  ajoutAvis(event) {
    if (event == Avis.AIMER) {
      this.description = " Vous avez cliqué sur J'aime";
    } else if (event == Avis.DETESTER) {
      this.description = " Vous avez cliqué sur Je déteste";
    }
  }
}
