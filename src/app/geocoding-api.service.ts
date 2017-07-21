import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//api keys
import { geoKey } from './api-keys';

@Injectable()
export class GeocodingAPIService {

  constructor(private http: Http) { }

  getPhysicalAddress(lat: string, lng: string): Observable<any> {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }

}
