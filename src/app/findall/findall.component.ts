import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-findall',
  templateUrl: './findall.component.html',
  styleUrls: ['./findall.component.css']
})
export class FindallComponent {
  Mylist : any;
  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void {
    this.http.get("http://localhost:58536/api/personne").subscribe({
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
