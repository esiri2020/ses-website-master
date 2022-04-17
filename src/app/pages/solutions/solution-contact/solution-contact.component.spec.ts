import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionContactComponent } from './solution-contact.component';

describe('SolutionContactComponent', () => {
  let component: SolutionContactComponent;
  let fixture: ComponentFixture<SolutionContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
