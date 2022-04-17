import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceCaseStudyComponent } from './resource-case-study.component';

describe('ResourceCaseStudyComponent', () => {
  let component: ResourceCaseStudyComponent;
  let fixture: ComponentFixture<ResourceCaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceCaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
