import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component {
  i:Item = new Item();
  message:string;
  reference:string;
  marque:string;
  prix:number;
  
    create()
    {
      this.i.reference=this.reference
      this.i.marque=this.marque;
      this.i.prix=this.prix;
      this.message=this.i.getInfo();
    }
  
}
