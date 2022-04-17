import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPhotosComponent } from './solution-photos.component';

describe('SolutionPhotosComponent', () => {
  let component: SolutionPhotosComponent;
  let fixture: ComponentFixture<SolutionPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
