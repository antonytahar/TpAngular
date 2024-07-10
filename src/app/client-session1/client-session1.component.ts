import { Component } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-client-session1',
  templateUrl: './client-session1.component.html',
  styleUrls: ['./client-session1.component.css']
})
export class ClientSession1Component {
  add()
  {
    let c: Client=new Client();
    c.nom="DURAND";
    c.prenom="JEAN";
    let str: string=JSON.stringify(c);
    console.log(str);
    sessionStorage.setItem("c",str);
  }

}
