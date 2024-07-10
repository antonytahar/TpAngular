import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comp-deletev2',
  templateUrl: './comp-deletev2.component.html',
  styleUrls: ['./comp-deletev2.component.css']
})
export class CompDeletev2Component {
  reference:string=''
    constructor(private http: HttpClient, private route: ActivatedRoute,private _router:Router) { }
  
    ngOnInit(): void {
    }
    delete(){
      this.http.delete("http://localhost:50141/api/article/"+this.reference).subscribe(
        (response )=> {
  
          this._router.navigate(['/compFindallv2'])
        }
        
      );
    }
  
}
