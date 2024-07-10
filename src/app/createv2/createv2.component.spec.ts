import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createv2Component } from './createv2.component';

describe('Createv2Component', () => {
  let component: Createv2Component;
  let fixture: ComponentFixture<Createv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
