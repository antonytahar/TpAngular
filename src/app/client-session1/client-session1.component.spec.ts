import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSession1Component } from './client-session1.component';

describe('ClientSession1Component', () => {
  let component: ClientSession1Component;
  let fixture: ComponentFixture<ClientSession1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSession1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
