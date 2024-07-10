import { Component } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-app9',
  templateUrl: './app9.component.html',
  styleUrls: ['./app9.component.css']
})
export class App9Component {
  info = { nom:'',prenom:''}
  tab: Array<Client> =new Array<Client>();
  add()
  {
    let c: Client=new Client();
    c.nom=this.info.nom;
    c.prenom=this.info.prenom;
    this.tab.push(c);
  }
}
