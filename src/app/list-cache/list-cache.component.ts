import { Component, Input } from '@angular/core';
import { GeocodingAPIService } from '../geocoding-api.service';

@Component({
  selector: 'app-list-cache',
  templateUrl: './list-cache.component.html',
  styleUrls: ['./list-cache.component.scss'],
  providers: [GeocodingAPIService]
})

export class ListCacheComponent {
  @Input() childApiResponse;
  constructor() { }


}
