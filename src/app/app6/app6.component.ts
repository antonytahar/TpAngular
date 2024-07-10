import { Component } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-app6',
  templateUrl: './app6.component.html',
  styleUrls: ['./app6.component.css']
})
export class App6Component {
  message : string =""
  c: Client=new Client()
  
  create()
  {
    this.message=this.c.getInfo()
  }
  
}
