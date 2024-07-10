import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFactureComponent } from './comp-facture.component';

describe('CompFactureComponent', () => {
  let component: CompFactureComponent;
  let fixture: ComponentFixture<CompFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
