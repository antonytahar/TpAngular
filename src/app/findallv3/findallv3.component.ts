import { Component } from '@angular/core';
import { SrvCrudService } from '../srv-crud.service';

@Component({
  selector: 'app-findallv3',
  templateUrl: './findallv3.component.html',
  styleUrls: ['./findallv3.component.css']
})
export class Findallv3Component {
  Mylist:any
  constructor(private srv: SrvCrudService) { }

  ngOnInit(): void {
    this.srv.getliste().then(x=> this.Mylist = x);
  }
  
}
