import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-create',
  templateUrl: './comp-create.component.html',
  styleUrls: ['./comp-create.component.css']
})
export class CompCreateComponent {
  article = {reference:'',marque:'', prix:0}
  message:string;
  constructor(private http:HttpClient){}
  create(){
    const body = JSON.stringify(this.article);
    this.http.post("http://localhost:50141/api/article/",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.message="article créée"
      
    },

      err => {
       
        this.message="erreur de creation article"
      });
  }

}
