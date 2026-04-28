import { Component, computed, inject } from '@angular/core';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-weather-details',
  standalone: false,
  templateUrl: './weather-details.html',
  styleUrl: './weather-details.css'
})
export class WeatherDetails {
  private weatherService = inject(Weather);
  details = computed(() => this.weatherService.currentWeather().details);
}
