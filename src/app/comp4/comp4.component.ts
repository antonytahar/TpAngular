import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
  message : string =""
  i: Item=new Item()
  
  create()
  {
    this.message=this.i.getInfo()
  }
  

}
