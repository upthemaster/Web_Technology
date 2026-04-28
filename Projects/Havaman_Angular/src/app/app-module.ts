import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { SearchBar } from './components/search-bar/search-bar';
import { WeatherCard } from './components/weather-card/weather-card';
import { WeatherDetails } from './components/weather-details/weather-details';
import { HourlyForecast } from './components/hourly-forecast/hourly-forecast';
import { DailyForecast } from './components/daily-forecast/daily-forecast';
import { AlertBanner } from './components/alert-banner/alert-banner';
import { Radar } from './components/radar/radar';
import { BottomNav } from './components/bottom-nav/bottom-nav';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [
    App,
    Header,
    SearchBar,
    WeatherCard,
    WeatherDetails,
    HourlyForecast,
    DailyForecast,
    AlertBanner,
    Radar,
    BottomNav,
    Home,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
