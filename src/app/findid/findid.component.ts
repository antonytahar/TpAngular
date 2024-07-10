import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-findid',
  templateUrl: './findid.component.html',
  styleUrls: ['./findid.component.css']
})
export class FindidComponent {
  id: number;
  constructor(private route: ActivatedRoute)
  {


  }

  ngOnInit(): void {


    //partie 1
    this.route.params.subscribe(params => {

      this.id = params['id'];
      console.log(this.id);

    });
  }


}
