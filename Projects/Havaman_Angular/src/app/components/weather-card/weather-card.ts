import { Component, inject } from '@angular/core';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-weather-card',
  standalone: false,
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css'
})
export class WeatherCard {
  public weatherService = inject(Weather);
  weather = this.weatherService.currentWeather;
}
