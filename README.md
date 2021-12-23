# Google-maps

![Google maps](https://user-images.githubusercontent.com/59800105/147277927-1cd3fde8-e071-43f7-b1a2-3213edc87f6c.png)

## Usage
1. Clone this repo

2.  > npm install

3. Update index html with your API key

4.  >  ionic serve

## Implementation

#### Start an application
```
ionic start GoogleMaps blank
```

#### Get an API key
```
https://developers.google.com/maps/documentation/javascript/get-api-key
```

#### Update index.html
> Update index.html (in the head element) inside your src folder

```
<script defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

#### Home folder
> home.page.html
Create a div element with #map and id="map"
```
<div #map id="map"></div>
```

> home.page.ts

```
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
```

> home.page.ts
```
#map {
  height: 100%;
}
```

#### Run project
```
ionic serve
```
