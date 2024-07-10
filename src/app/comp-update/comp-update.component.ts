import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-update',
  templateUrl: './comp-update.component.html',
  styleUrls: ['./comp-update.component.css']
})
export class CompUpdateComponent {
  reference: number;
  message: string;
  p: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    //partie 1
    this.route.params.subscribe(params => {

      this.reference = params['reference'];
      console.log(this.reference);

    });
    this.init();

  }

  init() {
    //partie 2
    this.http.get("http://localhost:50141/api/article/" + this.reference).subscribe(
      (response) => {
        this.p = response;

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

  update()
  {
    const body = JSON.stringify(this.p);
    
    this.http.put("http://localhost:50141/api/article", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

     
        this.message = "update ok"
      //  this.init();

      },

        err => {
        
          this.message = "update KO"
      //    this.init();
        });

  }

}
