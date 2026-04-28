import { Component, inject } from '@angular/core';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-alert-banner',
  standalone: false,
  templateUrl: './alert-banner.html',
  styleUrl: './alert-banner.css'
})
export class AlertBanner {
  private weatherService = inject(Weather);
  alert = this.weatherService.alert;
}
