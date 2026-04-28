import { Component, inject } from '@angular/core';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-daily-forecast',
  standalone: false,
  templateUrl: './daily-forecast.html',
  styleUrl: './daily-forecast.css'
})
export class DailyForecast {
  private weatherService = inject(Weather);
  daily = this.weatherService.dailyForecast;
}
