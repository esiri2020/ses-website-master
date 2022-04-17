import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceListTabComponent } from './resource-list-tab.component';

describe('ResourceListTabComponent', () => {
  let component: ResourceListTabComponent;
  let fixture: ComponentFixture<ResourceListTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceListTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
