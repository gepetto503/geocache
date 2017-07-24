import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//services
import { GeocodingAPIService } from '../geocoding-api.service';
import { MyGeosService } from '../my-geos.service';

//models
import { Geo } from '../geo.model';

@Component({
  selector: 'app-add-cache',
  templateUrl: './add-cache.component.html',
  styleUrls: ['./add-cache.component.scss'],
  providers: [GeocodingAPIService, MyGeosService]
})
export class AddCacheComponent {
  private apiResponse: any=null;//whole response (object)
  private apiResponse2: any=null;

  constructor(private geocodingAPIService: GeocodingAPIService, private myGeosService: MyGeosService) {}

  getAddress(creator:string, lat: string, long: string) {
    this.geocodingAPIService.getPhysicalAddress(lat,long).subscribe(response => {
      this.apiResponse = response.json();//whole response
      console.log(this.apiResponse);
      let newGeo: Geo;
      newGeo = new Geo(creator, this.apiResponse.results[0].formatted_address , lat, long);
      console.log(newGeo);
      this.myGeosService.addGeo(newGeo);
    });
  }

  getCoords(creator: string, address: string){
    this.geocodingAPIService.getCoords(creator, address).subscribe(response => {
      this.apiResponse2 = response.json();//whole response
      console.log(this.apiResponse2.results[0].geometry.location.lat, this.apiResponse2.results[0].geometry.location.lng);
      let newGeo: Geo;
      newGeo = new Geo(creator, address, this.apiResponse2.results[0].geometry.location.lat, this.apiResponse2.results[0].geometry.location.lng);
      console.log(newGeo);
      this.myGeosService.addGeo(newGeo);


    });
  }


}
