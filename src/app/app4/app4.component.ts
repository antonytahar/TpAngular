import { Component } from '@angular/core';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component {
   info: string="coucou";
   a: number;
   nom: string="toto";

   ngOnInit(): void {
     //alert("test")
   }
   m1()
 {
   this.a=10;
 }
}
