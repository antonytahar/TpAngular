import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompClientSession1Component } from './comp-client-session1.component';

describe('CompClientSession1Component', () => {
  let component: CompClientSession1Component;
  let fixture: ComponentFixture<CompClientSession1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompClientSession1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompClientSession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
