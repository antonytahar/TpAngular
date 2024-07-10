import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCreatev2Component } from './comp-createv2.component';

describe('CompCreatev2Component', () => {
  let component: CompCreatev2Component;
  let fixture: ComponentFixture<CompCreatev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCreatev2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompCreatev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
