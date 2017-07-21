import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCacheComponent } from './list-cache.component';

describe('ListCacheComponent', () => {
  let component: ListCacheComponent;
  let fixture: ComponentFixture<ListCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
