import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageTitleComponent } from './app-page-title.component';

describe('AppPageTitleComponent', () => {
  let component: AppPageTitleComponent;
  let fixture: ComponentFixture<AppPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
