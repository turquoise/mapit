import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

@Injectable()
export class MarkerService extends Init {

  constructor() {
    super();
    console.log('marker service initialized');
    this.load();
  }

  getMarkers() {
    let markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker) {
    // fetch markers
    let markers = JSON.parse(localStorage.getItem('markers'));
    // push to array
    markers.push(newMarker);
    // set localstorage
    localStorage.setItem('markers', JSON.stringify(markers));
  }

}
