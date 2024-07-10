import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDeletev3Component } from './comp-deletev3.component';

describe('CompDeletev3Component', () => {
  let component: CompDeletev3Component;
  let fixture: ComponentFixture<CompDeletev3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDeletev3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDeletev3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
