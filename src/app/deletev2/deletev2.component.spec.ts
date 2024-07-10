import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletev2Component } from './deletev2.component';

describe('Deletev2Component', () => {
  let component: Deletev2Component;
  let fixture: ComponentFixture<Deletev2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deletev2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deletev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
