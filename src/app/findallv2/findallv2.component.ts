import { Component } from '@angular/core';
import { Personne } from '../personne';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-findallv2',
  templateUrl: './findallv2.component.html',
  styleUrls: ['./findallv2.component.css']
})
export class Findallv2Component {
  Mylist : Array<Personne>;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Array<Personne>>("http://localhost:58536/api/personne").subscribe({
      next: (response) => {
        this.Mylist = response;
        console.log(response);
      },
      error: (err) => {
        console.log("*************KO");
      },
      complete: () => {
        console.log("*********complete****");
      }
    });
  }

}
