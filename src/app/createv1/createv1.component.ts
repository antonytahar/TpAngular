import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-createv1',
  templateUrl: './createv1.component.html',
  styleUrls: ['./createv1.component.css']
})
export class Createv1Component {
  personne=  { id: 201, nom: 'aaa',prenom:'bbb', age: 10 };
  constructor(private http: HttpClient) { }
  message: string;
  ngOnInit(): void {
  }
  create()
  {
    const body=JSON.stringify(this.personne);
    this.http.post("http://localhost:58536/api/personne",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe({
      next: (response) => {
        this.message="succes";
      },
      error: (err) => {
        this.message="échec";
      }
    });
  }

}
