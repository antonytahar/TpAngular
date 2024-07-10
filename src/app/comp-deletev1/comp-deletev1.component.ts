import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-deletev1',
  templateUrl: './comp-deletev1.component.html',
  styleUrls: ['./comp-deletev1.component.css']
})
export class CompDeletev1Component {
  message: string
  reference:string=''
    constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      //partie 1
  
      this.route.params.subscribe(params => {
        this.reference = params["reference"]
      })
  
      //partie 2
      this.http.delete("http://localhost:50141/api/article/"+this.reference).
      subscribe(
        (response )=> {
  
          this.message="article " + this.reference+ " supprimé";
        }
        
      );
    }

}
