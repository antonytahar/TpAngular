import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvCrudService {

  constructor(private http: HttpClient) { }

  post(data) {

    const body = JSON.stringify(data);

    this.http.post("http://localhost:58536/api/personne", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

        console.log("crud service post OK");

      },

        err => {
          console.log("crud service post KO")
        });


  }

  lst: any
  
  getliste()
 {
   return this.http.get("http://localhost:58536/api/personne").toPromise().then(res => {
     this.lst =res;
    return this.lst;
     // code here is executed on success
   })
  .catch();

 }

}
