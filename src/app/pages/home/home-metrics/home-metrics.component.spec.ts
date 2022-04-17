import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMetricsComponent } from './home-metrics.component';

describe('HomeMetricsComponent', () => {
  let component: HomeMetricsComponent;
  let fixture: ComponentFixture<HomeMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
