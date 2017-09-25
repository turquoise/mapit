import { Component } from '@angular/core';

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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // zoom level
  zoom: number = 10;
  // Start Position
  lat: number = 42.858217;
  lng: number = -70.929990;
  // Markers
  markers: Marker[] = [
    {
      name: 'Company One',
      lat: 42.825588,
      lng: -71.018029,
      draggable: true
    },
    {
      name: 'Company Two',
      lat: 42.861864,
      lng: -70.889071,
      draggable: true
    },
    {
      name: 'Company Three',
      lat: 42.828279,
      lng: -70.930498,
      draggable: false
    }
  ];

  constructor() {}

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
  }







}
