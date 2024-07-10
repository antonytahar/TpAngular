import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompArticle2Component } from './comp-article2.component';

describe('CompArticle2Component', () => {
  let component: CompArticle2Component;
  let fixture: ComponentFixture<CompArticle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompArticle2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompArticle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
