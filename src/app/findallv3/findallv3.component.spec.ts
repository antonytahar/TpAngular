import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Findallv3Component } from './findallv3.component';

describe('Findallv3Component', () => {
  let component: Findallv3Component;
  let fixture: ComponentFixture<Findallv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Findallv3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Findallv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
