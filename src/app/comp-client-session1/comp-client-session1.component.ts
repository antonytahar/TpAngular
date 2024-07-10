import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-comp-client-session1',
  templateUrl: './comp-client-session1.component.html',
  styleUrls: ['./comp-client-session1.component.css']
})
export class CompClientSession1Component {
  
  info = { reference:'',marque:'',prix:0}
  tab: Array<Item> =new Array<Item>();
  add()
  {
    let c: Item=new Item();
    c.reference=this.info.reference;
    c.marque=this.info.marque;
    c.prix=this.info.prix;
    this.tab.push(c); // d'abord tableau visible pour savoir le contenu envoyé


    // let c: Item=new Item();
    // c.reference=this.info.reference;
    // c.marque=this.info.marque;
    // c.prix=this.info.prix;

    let str: string=JSON.stringify(c);
    console.log(str);
    sessionStorage.setItem("c",str); //puis le JSON
  }
  save(){
    let str: string=JSON.stringify(this.tab);
    console.log(str);
    sessionStorage.setItem("tab",str); //enfin sauvegarde du tableau JSON 
  }

}
