import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-createv2',
  templateUrl: './createv2.component.html',
  styleUrls: ['./createv2.component.css']
})
export class Createv2Component {
  personne = {id:0, nom:'',prenom:'', age:0}
  message:string;
  constructor(private http:HttpClient){}
  create(){
    const body = JSON.stringify(this.personne);
    this.http.post("http://localhost:58536/api/personne/",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.message="personne créée"
      
    },

      err => {
       
        this.message="erreur de creation personne"
      });
  }
}
