import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCacheComponent } from './detail-cache.component';

describe('DetailCacheComponent', () => {
  let component: DetailCacheComponent;
  let fixture: ComponentFixture<DetailCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
