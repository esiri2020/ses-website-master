import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerOpeningsComponent } from './career-openings.component';

describe('CareerOpeningsComponent', () => {
  let component: CareerOpeningsComponent;
  let fixture: ComponentFixture<CareerOpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerOpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
