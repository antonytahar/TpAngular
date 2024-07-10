import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCreatev3Component } from './comp-createv3.component';

describe('CompCreatev3Component', () => {
  let component: CompCreatev3Component;
  let fixture: ComponentFixture<CompCreatev3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCreatev3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompCreatev3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
