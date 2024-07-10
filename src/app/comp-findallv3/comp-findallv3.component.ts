import { Component } from '@angular/core';
import { SrvCrudArticleService } from '../srv-crud-article.service';

@Component({
  selector: 'app-comp-findallv3',
  templateUrl: './comp-findallv3.component.html',
  styleUrls: ['./comp-findallv3.component.css']
})
export class CompFindallv3Component {
  Mylist:any
  constructor(private srv: SrvCrudArticleService) { }

  ngOnInit(): void {
    this.srv.getliste().then(x=> this.Mylist = x);
  }

}
