import { Component, OnInit } from '@angular/core';
import { GeocodingAPIService } from '../geocoding-api.service';

@Component({
  selector: 'app-add-cache',
  templateUrl: './add-cache.component.html',
  styleUrls: ['./add-cache.component.scss'],
  providers: [GeocodingAPIService]
})
export class AddCacheComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
