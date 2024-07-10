import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App10Component } from './app10.component';

describe('App10Component', () => {
  let component: App10Component;
  let fixture: ComponentFixture<App10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
