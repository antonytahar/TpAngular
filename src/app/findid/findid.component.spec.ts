import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindidComponent } from './findid.component';

describe('FindidComponent', () => {
  let component: FindidComponent;
  let fixture: ComponentFixture<FindidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
