import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRandomComponent } from './comp-random.component';

describe('CompRandomComponent', () => {
  let component: CompRandomComponent;
  let fixture: ComponentFixture<CompRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
