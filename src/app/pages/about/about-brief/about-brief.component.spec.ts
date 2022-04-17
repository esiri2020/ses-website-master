import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBriefComponent } from './about-brief.component';

describe('AboutBriefComponent', () => {
  let component: AboutBriefComponent;
  let fixture: ComponentFixture<AboutBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
