import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPersonneComponent } from './comp-personne.component';

describe('CompPersonneComponent', () => {
  let component: CompPersonneComponent;
  let fixture: ComponentFixture<CompPersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPersonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
