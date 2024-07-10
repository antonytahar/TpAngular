import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompClientSession2Component } from './comp-client-session2.component';

describe('CompClientSession2Component', () => {
  let component: CompClientSession2Component;
  let fixture: ComponentFixture<CompClientSession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompClientSession2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompClientSession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
