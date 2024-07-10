import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-deletev2',
  templateUrl: './deletev2.component.html',
  styleUrls: ['./deletev2.component.css']
})
export class Deletev2Component {
  message : string
  Mylist: Array<Personne>;
  constructor(private http: HttpClient) { }

  init()
  {
    this.http.get<Array<Personne>>("http://localhost:58536/api/personne").subscribe(
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

  delete(p:Personne)
  {
    this.http.delete("http://localhost:58536/api/personne/" + p.id

 
  ).subscribe(response => {
  
   this.message="personne supprimée";
   this.init();


  }, err => {
    console.log(err)
   // this.init();
  });

  }

}
