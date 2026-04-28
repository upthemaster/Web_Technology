import { Component, inject } from '@angular/core';
import { Weather } from '../../services/weather';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  private weatherService = inject(Weather);

  onSearch(query: string) {
    if (query.trim()) {
      this.weatherService.searchCity(query.trim());
    }
  }
}
