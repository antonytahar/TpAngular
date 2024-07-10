import { Component } from '@angular/core';
import { SrvCrudArticleService } from '../srv-crud-article.service';

@Component({
  selector: 'app-comp-createv3',
  templateUrl: './comp-createv3.component.html',
  styleUrls: ['./comp-createv3.component.css']
})
export class CompCreatev3Component {
  article = {reference:'',marque:'', prix:0}
  message: any

  constructor(private srv: SrvCrudArticleService) { }

  ngOnInit(): void {
  }

  create() {
    this.srv.post(this.article)
  }

}
