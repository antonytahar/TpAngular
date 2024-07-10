import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindallv3Component } from './comp-findallv3.component';

describe('CompFindallv3Component', () => {
  let component: CompFindallv3Component;
  let fixture: ComponentFixture<CompFindallv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFindallv3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFindallv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
