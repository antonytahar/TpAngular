import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDeletev2Component } from './comp-deletev2.component';

describe('CompDeletev2Component', () => {
  let component: CompDeletev2Component;
  let fixture: ComponentFixture<CompDeletev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDeletev2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDeletev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
