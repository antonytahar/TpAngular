import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id: number;
  message: string;
  p: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    //partie 1
    this.route.params.subscribe(params => {

      this.id = params['id'];
      console.log(this.id);

    });
    this.init();

  }

  init() {
    //partie 2
    this.http.get("http://localhost:58536/api/personne/" + this.id).subscribe(
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
    
    this.http.put("http://localhost:58536/api/personne", body, {
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
