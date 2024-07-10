import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindbyidComponent } from './comp-findbyid.component';

describe('CompFindbyidComponent', () => {
  let component: CompFindbyidComponent;
  let fixture: ComponentFixture<CompFindbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFindbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFindbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
