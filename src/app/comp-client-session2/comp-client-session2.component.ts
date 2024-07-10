import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-comp-client-session2',
  templateUrl: './comp-client-session2.component.html',
  styleUrls: ['./comp-client-session2.component.css']
})
export class CompClientSession2Component {
  tab: Array<Item> =new Array<Item>();
  ngOnInit(): void {
    let str: string = sessionStorage.getItem("tab");
    this.tab=JSON.parse(str);
  }

}
