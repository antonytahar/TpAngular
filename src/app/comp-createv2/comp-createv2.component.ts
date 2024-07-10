import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-comp-createv2',
  templateUrl: './comp-createv2.component.html',
  styleUrls: ['./comp-createv2.component.css']
})
export class CompCreatev2Component {
  article = {reference:'', marque:'', prix:0}
  message:string;

  constructor(private http:HttpClient){}
  create(){
    const body = JSON.stringify(this.article);
    this.http.post("http://localhost:50141/api/article/",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.message="article créé"
      this.init();
    },

      err => {
       
        this.message="erreur de creation article"
      });
  }

  liste:Array<Article>
  
  ngOnInit(): void {
    this.init()
  }
  init(){
    this.http.get<Array<Article>>("http://localhost:50141/api/article").subscribe(
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
