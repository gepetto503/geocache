import { TestBed, inject } from '@angular/core/testing';

import { GeocodingAPIService } from './geocoding-api.service';

describe('GeocodingAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocodingAPIService]
    });
  });

  it('should ...', inject([GeocodingAPIService], (service: GeocodingAPIService) => {
    expect(service).toBeTruthy();
  }));
});
