import { Component, OnInit } from '@angular/core';
import { GeocodingAPIService } from '../geocoding-api.service';

@Component({
  selector: 'app-detail-cache',
  templateUrl: './detail-cache.component.html',
  styleUrls: ['./detail-cache.component.scss'],
  providers: [GeocodingAPIService]
})
export class DetailCacheComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
