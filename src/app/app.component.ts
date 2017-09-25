import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';
// Marker Type
interface Marker {
  name?: string,
  lat: number,
  lng: number,
  draggable: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MarkerService ]
})
export class AppComponent {
  // zoom level
  zoom: number = 10;
  // Start Position
  lat: number = 42.858217;
  lng: number = -70.929990;
  // Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

  // Markers
  markers: Marker[];

  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
  }

  clickedMarker(marker: Marker, index: number) {
    console.log('clicked marker: ', marker.name, ' at index ', index);
  }

  mapClicked($event: any ) {
    console.log('map clicked ');
    let newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any) {
    console.log('dragEnd ', marker, $event);
    let updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }
    let newLat = $event.coords.lat;
    let newLng = $event.coords.lng;
    this._markerService.updateMarker(updMarker, newLat, newLng );
  }

  addMarker() {
    console.log('adding marker');
    let isDraggable;
    if (this.markerDraggable == 'yes') {
      isDraggable = true;
    } else {
      isDraggable = false;
    }
    let newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  removeMarker(marker) {
    console.log('remove marker');
    for(let i = 0; i < this.markers.length; i++) {
      if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng ) {
        this.markers.splice(i, 1 );
      }
    }
    this._markerService.removeMarker(marker);
  }







}
