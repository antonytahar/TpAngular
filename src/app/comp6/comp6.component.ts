import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component {
  info = { reference:'',marque:'',prix:0}
  tab: Array<Item> =new Array<Item>();
  add()
  {
    let c: Item=new Item();
    c.reference=this.info.reference;
    c.marque=this.info.marque;
    c.prix=this.info.prix;
    this.tab.push(c);
  }

}
