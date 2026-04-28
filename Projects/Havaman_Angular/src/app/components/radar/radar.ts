import { Component, effect, inject, OnInit } from '@angular/core';
import { Weather } from '../../services/weather';
import * as L from 'leaflet';

@Component({
  selector: 'app-radar',
  standalone: false,
  templateUrl: './radar.html',
  styleUrl: './radar.css'
})
export class Radar implements OnInit {
  private weatherService = inject(Weather);
  private map!: L.Map;

  constructor() {
    effect(() => {
      const loc = this.weatherService.currentLocation();
      if (this.map) {
        this.map.panTo([loc.lat, loc.lon]);
      }
    });
  }

  ngOnInit() {
    this.initMap();
  }

  private initMap() {
    const defaultCoords = this.weatherService.currentLocation();
    this.map = L.map('radarMap', {
      center: [defaultCoords.lat, defaultCoords.lon],
      zoom: 10,
      zoomControl: false, // We will use Leaflet's zoom, or hide it
      attributionControl: false
    });

    // Add generic OpenStreetMap tile bounds
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(this.map);

    // Using Leaflet's native zoom controls for reliable bounds handling
    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);
  }

  toggleMapType() {
    // Basic interaction mock for layers button, can be expanded to swap tile layer
    console.log("Map Layers toggled");
  }
}
