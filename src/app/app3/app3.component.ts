import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app3',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component {

  constructor(private _router:Router){}
  test1()
  {
    this._router.navigate(['/app4'])
  }

  test2()
  {
    this._router.navigate(['/app5'])
  }}
