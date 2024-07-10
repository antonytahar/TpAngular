import { Component } from '@angular/core';

@Component({
  selector: 'app-app5',
  templateUrl: './app5.component.html',
  styleUrls: ['./app5.component.css']
})
export class App5Component {

  c={nom:'',prenom:''};
  message: string="";
  create()
  {

    this.message=this.c.nom+ "   "+this.c.prenom;
  }
    
}
