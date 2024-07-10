import { Component } from '@angular/core';

@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.css']
})
export class Session1Component {
  add()
  {
    sessionStorage.setItem("nom","DUPOND")
    sessionStorage.setItem("prenom","toto")
  }

}
