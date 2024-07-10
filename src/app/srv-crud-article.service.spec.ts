import { TestBed } from '@angular/core/testing';

import { SrvCrudArticleService } from './srv-crud-article.service';

describe('SrvCrudArticleService', () => {
  let service: SrvCrudArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvCrudArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
