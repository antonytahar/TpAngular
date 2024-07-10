import { Component } from '@angular/core';

@Component({
  selector: 'app-session2',
  templateUrl: './session2.component.html',
  styleUrls: ['./session2.component.css']
})
export class Session2Component {
  nom: string;
  prenom: string;

  ngOnInit(): void {
    this.nom=sessionStorage.getItem("nom")
    this.prenom=sessionStorage.getItem("prenom")
  }
}
