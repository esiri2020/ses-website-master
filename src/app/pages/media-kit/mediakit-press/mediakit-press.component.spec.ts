import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediakitPressComponent } from './mediakit-press.component';

describe('MediakitPressComponent', () => {
  let component: MediakitPressComponent;
  let fixture: ComponentFixture<MediakitPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediakitPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediakitPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
