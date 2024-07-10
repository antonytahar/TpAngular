import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDeletev1Component } from './comp-deletev1.component';

describe('CompDeletev1Component', () => {
  let component: CompDeletev1Component;
  let fixture: ComponentFixture<CompDeletev1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDeletev1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDeletev1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
