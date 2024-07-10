import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createv3Component } from './createv3.component';

describe('Createv3Component', () => {
  let component: Createv3Component;
  let fixture: ComponentFixture<Createv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createv3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
