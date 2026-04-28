import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private isDarkTheme = signal(false);

  constructor() {
    this.checkInitialTheme();
  }

  get isDark() {
    return this.isDarkTheme.asReadonly();
  }

  toggleTheme() {
    this.isDarkTheme.set(!this.isDarkTheme());
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkTheme()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  private checkInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme.set(savedTheme === 'dark');
      this.applyTheme();
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        this.isDarkTheme.set(true);
        this.applyTheme();
      }
    }
  }
}
