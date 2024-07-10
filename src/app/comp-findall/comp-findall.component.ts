import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-findall',
  templateUrl: './comp-findall.component.html',
  styleUrls: ['./comp-findall.component.css']
})
export class CompFindallComponent {
  
  Mylist : any;
  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void {
    this.http.get("http://localhost:50141/api/article").subscribe({
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
