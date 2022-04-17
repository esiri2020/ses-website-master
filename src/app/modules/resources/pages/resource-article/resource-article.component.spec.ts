import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceArticleComponent } from './resource-article.component';

describe('ResourceArticleComponent', () => {
  let component: ResourceArticleComponent;
  let fixture: ComponentFixture<ResourceArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
