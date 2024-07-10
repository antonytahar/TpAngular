import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-comp-deletev3',
  templateUrl: './comp-deletev3.component.html',
  styleUrls: ['./comp-deletev3.component.css']
})
export class CompDeletev3Component {
  message : string
  Mylist: Array<Article>;
  constructor(private http: HttpClient) { }

  init()
  {
    this.http.get<Array<Article>>("http://localhost:50141/api/article").subscribe(
      (response) => {
        this.Mylist=response;
       
        console.log(response);
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
  ngOnInit(): void {
    this.init();
  }

  delete(p:Article)
  {
    this.http.delete("http://localhost:50141/api/article/" + p.reference

 
  ).subscribe(response => {
  
   this.message="article supprimé";
   this.init();


  }, err => {
    console.log(err)
   // this.init();
  });

  }

}
