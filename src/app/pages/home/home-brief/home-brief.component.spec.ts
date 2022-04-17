import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBriefComponent } from './home-brief.component';

describe('HomeBriefComponent', () => {
  let component: HomeBriefComponent;
  let fixture: ComponentFixture<HomeBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
