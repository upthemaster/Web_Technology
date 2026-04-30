import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page">
      <h2>ℹ️ About Us</h2>
      <p>This application demonstrates Angular Routing with Standalone Components.</p>
    </div>
  `,
  styles: `.page { padding: 20px; text-align: center; }`
})
export class AboutComponent {}