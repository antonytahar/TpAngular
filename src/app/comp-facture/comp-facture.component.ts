import { Component } from '@angular/core';
import { Facture } from '../facture';
import { Item } from '../item';
import { Ligne } from '../ligne';

@Component({
  selector: 'app-comp-facture',
  templateUrl: './comp-facture.component.html',
  styleUrls: ['./comp-facture.component.css']
})
export class CompFactureComponent {

  message: string;

  ngOnInit(): void {
    let i1:Item=new Item();
    i1.reference="1";
    i1.marque="soubouais";
    i1.prix=12;

    let i2:Item=new Item();
    i2.reference="2";
    i2.marque="braia";
    i2.prix=120;

    let i3:Item=new Item();
    i3.reference="3";
    i3.marque="puna";
    i3.prix=54;


    let l1:Ligne=new Ligne(7,i1);
    let l2:Ligne=new Ligne(2,i2);
    let l3:Ligne=new Ligne(6,i3);
    
    let facture: Facture = new Facture("Perusse",[l1,l2,l3]);
    


    this.message=facture.getInfo();

  }

  }

