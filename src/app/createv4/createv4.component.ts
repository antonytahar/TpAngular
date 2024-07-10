import { Component } from '@angular/core';
import { SrvCrudService } from '../srv-crud.service';

@Component({
  selector: 'app-createv4',
  templateUrl: './createv4.component.html',
  styleUrls: ['./createv4.component.css']
})
export class Createv4Component {
  personne = {id:0, nom:'',prenom:'', age:0}
  message: any



  constructor(private srv: SrvCrudService) { }

  ngOnInit(): void {
  }

  create() {
    this.srv.post(this.personne)
  }

}
