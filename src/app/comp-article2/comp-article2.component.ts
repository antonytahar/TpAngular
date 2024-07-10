import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-article2',
  templateUrl: './comp-article2.component.html',
  styleUrls: ['./comp-article2.component.css']
})
export class CompArticle2Component {
  c={ref:'',marque:'',prix:''};
  message: string="";
  create()
  {

    this.message=this.c.ref+ "   "+this.c.marque+"   "+this.c.prix;
  }

}
