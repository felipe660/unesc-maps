import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {} from 'googlemaps';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPageComponent implements OnInit {
  
  mapLoaded: boolean;
  map: google.maps.Map;
  center: google.maps.LatLngLiteral;

  source: google.maps.LatLngLiteral;
  destination: google.maps.LatLngLiteral;

  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 18
  }

  time: string = ''
  distance: string = ''

  ds: google.maps.DirectionsService;
  dr: google.maps.DirectionsRenderer;

  myLoc: any;

  routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {

    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params)
      this.destination = {
        lat: Number(params.lat),
        lng: Number(params.lng)
      };
    });

    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer({
      map: null,
      suppressMarkers: true
    });

    navigator.geolocation.getCurrentPosition(position => {
      this.myLoc = position.coords;
      console.log(this.myLoc.latitude)
      console.log(this.myLoc.longitude)

      this.source = {
        lat: this.myLoc.latitude,
        lng: this.myLoc.longitude
      };

      // this.destination = {
      //   lat: this.professor[0].lat,
      //   lng: this.professor[0].lng
      // };

      // initialize the map container
      this.map = new google.maps.Map(document.getElementById('map-canvas'), {
        ...this.options,
        center: this.source
      });

      this.map.addListener('tilesloaded', () => {
        this.mapLoaded = true;
      });

      // adding a marker
      var markerStart = new google.maps.Marker({
        position: this.source,
        icon: {
          url: './assets/imgs/map-pin.svg',
          anchor: new google.maps.Point(35,10),
          scaledSize: new google.maps.Size(100, 100)
        },
        map: this.map
      });

      markerStart.addListener("click", (event: any) =>{
        let infoWindow = new google.maps.InfoWindow({
          content:"hello </br>  world"
        });

        infoWindow.open(this.map, markerStart)
      });

      var destinationMarker = new google.maps.Marker({
        position: this.destination,
        icon: {
          url: './assets/imgs/destination_custom_pin.svg',
          anchor: new google.maps.Point(35,10),
          scaledSize: new google.maps.Size(100, 100)
        },
        map: this.map
      });

      destinationMarker.addListener("click", (event: any) =>{
        let infoWindow = new google.maps.InfoWindow({
          content:"hello </br>  world"
        });

        infoWindow.open(this.map, destinationMarker)
      });

      this.setRoutePolyline();
    });
  }

  myInterval = window.setInterval(function(){
  navigator.geolocation.getCurrentPosition(position => {
    this.myLoc = position.coords;
    console.log(this.myLoc.latitude)
    console.log(this.myLoc.longitude)

    this.source = {
      lat: this.myLoc.latitude,
      lng: this.myLoc.longitude
    };
  })
  }, 5000);

  setRoutePolyline() {
    let request = {
      origin: this.source,
      destination: this.destination,
      travelMode: google.maps.TravelMode.WALKING
    };

    this.ds.route(request, (response, status) => {
      console.log(response, status)
      this.dr.setOptions({
        suppressPolylines: false,
        map: this.map
      });

      if (status == google.maps.DirectionsStatus.OK) {
        this.dr.setDirections(response);

        this.distance = response.routes[0].legs[0].distance.text;
        this.time = response.routes[0].legs[0].duration.text;
      }
    })
  }
}
