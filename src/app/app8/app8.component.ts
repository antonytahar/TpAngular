import { Component } from '@angular/core';

@Component({
  selector: 'app-app8',
  templateUrl: './app8.component.html',
  styleUrls: ['./app8.component.css']
})
export class App8Component {
  info:string;
  tab=[];

  add()
  {
    this.tab.push(this.info);
  }
}
