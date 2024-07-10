import { Component } from '@angular/core';
import { Voiture } from '../voiture';
import { Proprio } from '../proprio';
import { Complement } from '../complement';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.css']
})
export class Comp7Component {
  info = { matricule:'',marque:'',prix:0,vmax:0,nom:'',prenom:''}
  message: string;
  tabVoiture: Array<Voiture> =new Array<Voiture>();

  ngOnInit(): void {
  }

  add(){
    let c:Complement=new Complement();
    c.prix=this.info.prix;
    c.vmax=this.info.vmax;


    let p:Proprio=new Proprio();
    p.nom=this.info.nom
    p.prenom=this.info.prenom

    let v:Voiture=new Voiture();
    v.matricule=this.info.matricule;
    v.marque=this.info.marque;
    v.proprio=p;
    v.complement=c;

    this.tabVoiture.push(v);
  }
  recap(){
    let c:Complement=new Complement();
    c.prix=this.info.prix;
    c.vmax=this.info.vmax;


    let p:Proprio=new Proprio();
    p.nom=this.info.nom
    p.prenom=this.info.prenom

    let v:Voiture=new Voiture();
    v.matricule=this.info.matricule;
    v.marque=this.info.marque;
    v.proprio=p;
    v.complement=c;

    this.message="Votre récap: " + v.getInfo();
  }
}
