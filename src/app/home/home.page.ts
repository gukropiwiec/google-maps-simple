import { Component } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: any;

  constructor() { }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    let coords = new google.maps.LatLng(-25.452413, -49.266977);
    let mapOptions = {
      center: coords,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map
    });
  }

}
