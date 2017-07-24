import { TestBed, inject } from '@angular/core/testing';

import { MyGeosService } from './my-geos.service';

describe('MyGeosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGeosService]
    });
  });

  it('should ...', inject([MyGeosService], (service: MyGeosService) => {
    expect(service).toBeTruthy();
  }));
});
