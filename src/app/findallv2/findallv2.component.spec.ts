import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Findallv2Component } from './findallv2.component';

describe('Findallv2Component', () => {
  let component: Findallv2Component;
  let fixture: ComponentFixture<Findallv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Findallv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Findallv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
