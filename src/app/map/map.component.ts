import { Component, AfterViewInit } from '@angular/core';
// import 'leaflet.heat/dist/leaflet-heat.js'

import * as L from 'leaflet';
import 'leaflet.heat'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  
    private map: any;
    private myPoints: any;
    private heat: any = [];
    private options: any;
    private bounds: any;
    private marker: any;
    private image: any;
    private LightIcon: any;
    private defaultHmRadius = 50;
    private defaultHmBlur = 50;
    private gradient = {0.4: 'blue', 0.55: 'lime', 0.80: 'yellow', 1: 'red'}
  
    private initMap(): void {
      this.map = L.map('map', { crs: L.CRS.Simple });
      this.bounds = [[0,0],[1000,1000]];
      this.image = L.imageOverlay('assets/floor.jpg', this.bounds).addTo(this.map);
    
      this.LightIcon = L.Icon.extend({
        options: {
        iconSize:[60, 55],
        }
    });
      this.LightIcon = new this.LightIcon ({iconUrl: 'assets/light.jpg'});
      this.map.fitBounds(this.bounds);
      this.myPoints = [
        [400, 900, 8000 ]

    ]
    this.options = {
      
      layers: [
      this.image
      ],
      radius: this.defaultHmRadius, blur: this.defaultHmBlur, gradient: this.gradient,
      zoom: 12,
      center: L.latLng(this.myPoints),
      
    };
  
      // this.marker = L.marker([400, 900 ], {icon: this.LightIcon}).addTo(this.map);

  
      ////Adding heat layer to a map
  
  
    this.heat = L.heatLayer(this.myPoints, this.options ).addTo(this.map);}
  
    constructor() { }
  
    ngAfterViewInit(): void {
      
      this.initMap();
      return this.heat;
      
    }
  }