import { Component } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-client-session2',
  templateUrl: './client-session2.component.html',
  styleUrls: ['./client-session2.component.css']
})
export class ClientSession2Component {
  c: Client;
  ngOnInit(): void {
    let str: string = sessionStorage.getItem("c");
    this.c=JSON.parse(str);
  }

}
