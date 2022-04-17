import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgridCardComponent } from './listgrid-card.component';

describe('ListgridCardComponent', () => {
  let component: ListgridCardComponent;
  let fixture: ComponentFixture<ListgridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListgridCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
