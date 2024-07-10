import { Component } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-app7',
  templateUrl: './app7.component.html',
  styleUrls: ['./app7.component.css']
})
export class App7Component {
c:Client = new Client();
message:string;
nom:string;
prenom:string;

  create()
  {
    this.c.nom=this.nom
    this.c.prenom=this.prenom;
    //this.message=this.c.nom+"  "+this.c.prenom;
    this.message=this.c.getInfo();
  }

  create2()
  {
    let x: Client=new Client();
    x.nom=this.nom
    x.prenom=this.prenom;
    this.message=x.getInfo();
    
  }
  create3()
  {
    let x: Client=new Client();
     x.nom=this.nom
     x.prenom=this.prenom;
     this.message=x.nom+"  "+x.prenom;
    
  }
}
