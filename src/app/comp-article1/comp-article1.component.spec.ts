import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompArticle1Component } from './comp-article1.component';

describe('CompArticle1Component', () => {
  let component: CompArticle1Component;
  let fixture: ComponentFixture<CompArticle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompArticle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompArticle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
