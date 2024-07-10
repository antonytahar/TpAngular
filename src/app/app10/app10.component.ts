import { Component } from '@angular/core';
import { Adresse } from '../adresse';
import { Employe } from '../employe';
import { EmployeInfo } from '../employe-info';

@Component({
  selector: 'app-app10',
  templateUrl: './app10.component.html',
  styleUrls: ['./app10.component.css']
})
export class App10Component {
  message: string;
  ngOnInit(): void {
    let a:Adresse=new Adresse();
    a.num=2;
    a.rue="rue de paris";
    a.cp="75012";


    let e:Employe=new Employe();
    e.nom="DUPOND"
    e.prenom="TOTO"

    let ei:EmployeInfo=new EmployeInfo();
    ei.info="superbe profil  ";
    ei.adr=a;
    ei.emp=e;

    this.message=ei.getInformation();

  }

}
