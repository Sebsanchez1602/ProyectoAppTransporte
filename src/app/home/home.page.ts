import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
  