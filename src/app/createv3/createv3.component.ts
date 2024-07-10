import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-createv3',
  templateUrl: './createv3.component.html',
  styleUrls: ['./createv3.component.css']
})
export class Createv3Component {
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
      this.init();
    },

      err => {
       
        this.message="erreur de creation personne"
      });
  }

  liste:Array<Personne>
  
  ngOnInit(): void {
    this.init()
  }
  init(){
    this.http.get<Array<Personne>>("http://localhost:58536/api/personne").subscribe(
      (response) => {
      
        this.liste=response;
        console.log(response)
      }
      ,
     (err) => {
        console.log("*************KO")
        
      },

      () => {
        console.log("*********complete****")
        
      }

    );
  }
  

}
