import { Component, OnInit } from '@angular/core';


declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
map = null;


  constructor() { }
  ngOnInit() {
    this.loadMap()};

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -41.46965254642236, lng: -72.92573346931593};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {

      mapEle.classList.add('show-map');
      const marker = {
        position: {
          lat: -41.46965254642236,
          lng:-72.92573346931593
        },
        title: 'inicio'
      }
      this.addMarker(marker);
    });
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
  
  }



