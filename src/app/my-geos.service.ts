import { Injectable } from '@angular/core';
import { Geo } from './geo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class MyGeosService {
  geos: FirebaseListObservable<any[]>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.geos = angularFireDatabase.list('geos');
  }

  addGeo(newGeo: Geo) {
    this.geos.push(newGeo);
  }

}
