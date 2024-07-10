import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindallComponent } from './comp-findall.component';

describe('CompFindallComponent', () => {
  let component: CompFindallComponent;
  let fixture: ComponentFixture<CompFindallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFindallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompFindallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
