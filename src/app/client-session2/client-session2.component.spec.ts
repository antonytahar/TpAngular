import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSession2Component } from './client-session2.component';

describe('ClientSession2Component', () => {
  let component: ClientSession2Component;
  let fixture: ComponentFixture<ClientSession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSession2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
