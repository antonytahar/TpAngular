import { TestBed } from '@angular/core/testing';

import { SrvCrudService } from './srv-crud.service';

describe('SrvCrudService', () => {
  let service: SrvCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
