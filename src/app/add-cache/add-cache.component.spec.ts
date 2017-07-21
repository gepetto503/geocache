import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCacheComponent } from './add-cache.component';

describe('AddCacheComponent', () => {
  let component: AddCacheComponent;
  let fixture: ComponentFixture<AddCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
