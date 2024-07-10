import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  constructor(private _router:Router){}
  comp2()
  {
    this._router.navigate(['/comp2'])
  }

  comp3()
  {
    this._router.navigate(['/comp3'])
  }}
