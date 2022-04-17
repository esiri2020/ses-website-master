import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionBenefitsComponent } from './solution-benefits.component';

describe('SolutionBenefitsComponent', () => {
  let component: SolutionBenefitsComponent;
  let fixture: ComponentFixture<SolutionBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
