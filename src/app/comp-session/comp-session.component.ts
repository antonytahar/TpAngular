import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-session',
  templateUrl: './comp-session.component.html',
  styleUrls: ['./comp-session.component.css']
})
export class CompSessionComponent {
  nb: number = 0;
  message: string;

  ngOnInit(): void {
    if (!sessionStorage.getItem("nb")) {
      sessionStorage.setItem("nb", "0");
    }
    
    this.nb = Number(sessionStorage.getItem("nb")) + 1;
    sessionStorage.setItem("nb", this.nb.toString());

    this.message = this.nb.toString();
  }
}
