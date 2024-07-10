import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  message: string
  id:number
    constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      //partie 1
  
      this.route.params.subscribe(params => {
        this.id = params["id"]
      })
  
      //partie 2
      this.http.delete("http://localhost:58536/api/personne/"+this.id).
      subscribe(
        (response )=> {
  
          this.message="personne supprimée";
        }
        
      );
    }
}
