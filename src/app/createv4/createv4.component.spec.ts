import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createv4Component } from './createv4.component';

describe('Createv4Component', () => {
  let component: Createv4Component;
  let fixture: ComponentFixture<Createv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createv4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
