import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSessionComponent } from './comp-session.component';

describe('CompSessionComponent', () => {
  let component: CompSessionComponent;
  let fixture: ComponentFixture<CompSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
