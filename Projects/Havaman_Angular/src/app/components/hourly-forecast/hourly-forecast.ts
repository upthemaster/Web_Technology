import { Component, inject } from '@angular/core';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-hourly-forecast',
  standalone: false,
  templateUrl: './hourly-forecast.html',
  styleUrl: './hourly-forecast.css'
})
export class HourlyForecast {
  private weatherService = inject(Weather);
  hourly = this.weatherService.hourlyForecast;
}
