import { Component, OnInit } from '@angular/core';
import { GeocodingAPIService } from '../geocoding-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-cache',
  templateUrl: './add-cache.component.html',
  styleUrls: ['./add-cache.component.scss'],
  providers: [GeocodingAPIService]
})
export class AddCacheComponent {
  private apiResponse: any[]=null;

  constructor(private geocodingAPIService: GeocodingAPIService) { }

  submitLatLong(lat: string, long: string){
    this.geocodingAPIService.getPhysicalAddress(lat,long).subscribe(response => {
      this.apiResponse = response.json();
      console.log(this.apiResponse);
    })
  }

}
