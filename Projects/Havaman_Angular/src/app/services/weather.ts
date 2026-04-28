import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface WeatherData {
  city: string;
  date: string;
  temperature: number | string;
  condition: string;
  icon: string;
  color: string;
  details: {
    humidity: string;
    wind: string;
    uvIndex: string;
    visibility: string;
  };
}

export interface HourlyForecastData {
  time: string;
  temp: number | string;
  icon: string;
  color: string;
}

export interface DailyForecastData {
  day: string;
  condition: string;
  high: number | string;
  low: number | string;
  icon: string;
  color: string;
}

export interface AlertData {
  isActive: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private http = inject(HttpClient);

  currentWeather = signal<WeatherData>({
    city: 'Loading...',
    date: '--',
    temperature: '--',
    condition: 'Loading',
    icon: 'hourglass_empty',
    color: 'var(--text-muted)',
    details: {
      humidity: '--%',
      wind: '-- mph',
      uvIndex: '--',
      visibility: '-- mi'
    }
  });

  hourlyForecast = signal<HourlyForecastData[]>([
    { time: '--', temp: '--', icon: 'hourglass_empty', color: 'var(--text-muted)' },
    { time: '--', temp: '--', icon: 'hourglass_empty', color: 'var(--text-muted)' },
    { time: '--', temp: '--', icon: 'hourglass_empty', color: 'var(--text-muted)' }
  ]);

  dailyForecast = signal<DailyForecastData[]>([]);

  alert = signal<AlertData>({
    isActive: false,
    message: ''
  });

  // Track coordinates for map
  currentLocation = signal({ lat: 37.7749, lon: -122.4194 });

  constructor() {
    this.initLocation();
  }

  initLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.fetchWeatherByCoords(position.coords.latitude, position.coords.longitude, "Current Location");
        },
        (error) => {
          console.warn('Geolocation denied or failed, falling back to San Francisco', error);
          this.fetchWeatherByCoords(37.7749, -122.4194, "San Francisco");
        }
      );
    } else {
      this.fetchWeatherByCoords(37.7749, -122.4194, "San Francisco");
    }
  }

  async searchCity(query: string) {
    if (!query) return;
    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1`;
      const geoData: any = await firstValueFrom(this.http.get(geoUrl));
      
      if (geoData.results && geoData.results.length > 0) {
        const result = geoData.results[0];
        const cityName = `${result.name}${result.admin1 ? ', ' + result.admin1 : ''}`;
        this.fetchWeatherByCoords(result.latitude, result.longitude, cityName);
      } else {
        this.alert.set({ isActive: true, message: `Could not find location "${query}"` });
      }
    } catch (e) {
      console.error(e);
      this.alert.set({ isActive: true, message: 'Search failed. Please try again.' });
    }
  }

  async fetchWeatherByCoords(lat: number, lon: number, cityName?: string) {
    this.currentLocation.set({ lat, lon });
    
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,visibility,uv_index&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`;
      const data: any = await firstValueFrom(this.http.get(url));

      // Parse Current Weather
      const current = data.current;
      const wcode = current.weather_code;
      const { icon, condition, color } = this.getWeatherInfo(wcode);
      
      // Update alerts if severe
      if (wcode >= 95) {
        this.alert.set({ isActive: true, message: 'Thunderstorm warning active for your area.' });
      } else if (current.wind_speed_10m > 30) {
        this.alert.set({ isActive: true, message: 'High wind advisory.' });
      } else {
        this.alert.set({ isActive: false, message: '' });
      }

      const rawCity = cityName || 'Unknown Location';

      // UV formatting
      let uvLabel = 'Low';
      if (current.uv_index >= 3 && current.uv_index <= 5) uvLabel = 'Moderate';
      if (current.uv_index >= 6 && current.uv_index <= 7) uvLabel = 'High';
      if (current.uv_index >= 8) uvLabel = 'V. High';

      const visMiles = (current.visibility / 1609).toFixed(1);

      this.currentWeather.set({
        city: rawCity,
        date: new Date(current.time).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }),
        temperature: Math.round(current.temperature_2m),
        condition: condition,
        icon: icon,
        color: color,
        details: {
          humidity: `${Math.round(current.relative_humidity_2m)}%`,
          wind: `${Math.round(current.wind_speed_10m)} mph`,
          uvIndex: uvLabel,
          visibility: `${visMiles} mi`
        }
      });

      // Parse Hourly (Next 3 hours)
      const currentHourIdx = data.hourly.time.findIndex((t: string) => new Date(t).getTime() > new Date(current.time).getTime());
      
      let hourlyData: HourlyForecastData[] = [];
      // Push NOW exact conditions
      hourlyData.push({
        time: 'NOW',
        temp: Math.round(current.temperature_2m),
        icon: icon,
        color: color
      });

      // Push next 2 hours
      for (let i = 0; i < 2; i++) {
        let idx = currentHourIdx !== -1 ? currentHourIdx + i : i;
        if (idx < data.hourly.weather_code.length) {
          let hc = this.getWeatherInfo(data.hourly.weather_code[idx]);
          const d = new Date(data.hourly.time[idx]);
          let tLabel = d.toLocaleString('en-US', { hour: 'numeric', hour12: true }).replace(' ', '');
          
          hourlyData.push({
            time: tLabel,
            temp: Math.round(data.hourly.temperature_2m[idx]),
            icon: hc.icon,
            color: hc.color
          });
        }
      }
      this.hourlyForecast.set(hourlyData);

      // Parse Daily (Next 5 days)
      let dailyData: DailyForecastData[] = [];
      // Skip today (index 0) and show next 5 days starting tomorrow (index 1 to 5)
      for (let i = 1; i <= 5; i++) {
        if (i < data.daily.time.length) {
          let d = new Date(data.daily.time[i]);
          let w = this.getWeatherInfo(data.daily.weather_code[i]);
          dailyData.push({
            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
            condition: w.condition,
            high: Math.round(data.daily.temperature_2m_max[i]),
            low: Math.round(data.daily.temperature_2m_min[i]),
            icon: w.icon,
            color: w.color
          });
        }
      }
      this.dailyForecast.set(dailyData);

    } catch (err) {
      console.error(err);
      this.alert.set({ isActive: true, message: 'Failed to fetch weather data.' });
    }
  }

  // Helper method for WMO weather codes mapping
  private getWeatherInfo(code: number): { icon: string, condition: string, color: string } {
    if (code === 0) return { icon: 'sunny', condition: 'Clear sky', color: 'var(--weather-sun)' };
    if (code === 1 || code === 2 || code === 3) return { icon: 'partly_cloudy_day', condition: 'Partly cloudy', color: 'var(--weather-cloud)' };
    if (code >= 45 && code <= 48) return { icon: 'foggy', condition: 'Fog', color: 'var(--text-muted)' };
    if (code >= 51 && code <= 55) return { icon: 'weather_mix', condition: 'Drizzle', color: 'var(--weather-cloud)' };
    if (code >= 61 && code <= 65) return { icon: 'rainy', condition: 'Rain', color: 'var(--weather-rain)' };
    if (code >= 71 && code <= 77) return { icon: 'ac_unit', condition: 'Snow', color: 'var(--text-muted)' };
    if (code >= 80 && code <= 82) return { icon: 'rainy', condition: 'Rain showers', color: 'var(--weather-rain)' };
    if (code >= 85 && code <= 86) return { icon: 'ac_unit', condition: 'Snow showers', color: 'var(--text-muted)' };
    if (code >= 95) return { icon: 'thunderstorm', condition: 'Thunderstorm', color: 'var(--weather-rain)' };
    return { icon: 'cloud', condition: 'Unknown', color: 'var(--weather-cloud)' };
  }
}
