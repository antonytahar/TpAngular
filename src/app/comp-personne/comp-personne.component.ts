import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-personne',
  templateUrl: './comp-personne.component.html',
  styleUrls: ['./comp-personne.component.css']
})
export class CompPersonneComponent {
  nom: string="tatol";
  prenom: string="toto";
  age: number=10;
  statut: string="";
  m1(){
    if (this.age >= 50) {
      this.statut="senior";
    } else {
      if (this.age>=18) {
        this.statut="majeur";
      } else {
        this.statut="mineur";
      }
    }
    
  }
}
