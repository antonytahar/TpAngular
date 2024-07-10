import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../personne';

@Component({
  selector: 'app-findbyid',
  templateUrl: './findbyid.component.html',
  styleUrls: ['./findbyid.component.css']
})
export class FindbyidComponent {
  //
  id:number;
  p:Personne;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {

    //partie 1
    this.route.params.subscribe(params => {

      this.id = params['id'];
      console.log(this.id);

    });

 //partie 2
 this.http.get<Personne>("http://localhost:58536/api/personne/"+this.id).subscribe({
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
