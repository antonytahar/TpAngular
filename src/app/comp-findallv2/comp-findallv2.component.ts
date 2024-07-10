import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-comp-findallv2',
  templateUrl: './comp-findallv2.component.html',
  styleUrls: ['./comp-findallv2.component.css']
})
export class CompFindallv2Component {
  Mylist : Array<Article>;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Array<Article>>("http://localhost:50141/api/article").subscribe({
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
