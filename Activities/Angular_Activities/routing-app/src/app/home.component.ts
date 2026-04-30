import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="page">
      <h2>🏠 Home Page</h2>
      <p>Welcome to our Angular Routing Application!</p>
    </div>
  `,
  styles: `.page { padding: 20px; text-align: center; }`
})
export class HomeComponent {}