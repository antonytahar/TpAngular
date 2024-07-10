import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindallv2Component } from './comp-findallv2.component';

describe('CompFindallv2Component', () => {
  let component: CompFindallv2Component;
  let fixture: ComponentFixture<CompFindallv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFindallv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFindallv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
