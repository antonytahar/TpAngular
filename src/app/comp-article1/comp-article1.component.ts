import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-article1',
  templateUrl: './comp-article1.component.html',
  styleUrls: ['./comp-article1.component.css']
})
export class CompArticle1Component {
  ref: string="";
  marque: string="";
  prix: number=0;
  message: string="";
  create()
  {

    this.message=this.ref+ "   "+this.marque+"   "+this.prix;
  }

}
