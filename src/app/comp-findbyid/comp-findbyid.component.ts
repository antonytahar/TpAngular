import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-comp-findbyid',
  templateUrl: './comp-findbyid.component.html',
  styleUrls: ['./comp-findbyid.component.css']
})
export class CompFindbyidComponent {
  //
  reference:number;
  p:Article;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {

    //partie 1
    this.route.params.subscribe(params => {

      this.reference = params['reference'];
      console.log(this.reference);

    });

 //partie 2
 this.http.get<Article>("http://localhost:50141/api/article/"+this.reference).subscribe({
  next: (response) => {
    this.p = response;
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
