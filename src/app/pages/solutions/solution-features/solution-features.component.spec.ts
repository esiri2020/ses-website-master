import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionFeaturesComponent } from './solution-features.component';

describe('SolutionFeaturesComponent', () => {
  let component: SolutionFeaturesComponent;
  let fixture: ComponentFixture<SolutionFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
