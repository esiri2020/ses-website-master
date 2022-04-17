import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApproachComponent } from './about-approach.component';

describe('AboutApproachComponent', () => {
  let component: AboutApproachComponent;
  let fixture: ComponentFixture<AboutApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
