import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFloatCardComponent } from './schedule-float-card.component';

describe('ScheduleFloatCardComponent', () => {
  let component: ScheduleFloatCardComponent;
  let fixture: ComponentFixture<ScheduleFloatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFloatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFloatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
