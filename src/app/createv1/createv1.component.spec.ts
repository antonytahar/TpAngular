import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createv1Component } from './createv1.component';

describe('Createv1Component', () => {
  let component: Createv1Component;
  let fixture: ComponentFixture<Createv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createv1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
