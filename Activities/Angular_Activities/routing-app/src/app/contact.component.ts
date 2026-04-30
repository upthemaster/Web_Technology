import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page">
      <h2>📞 Contact Us</h2>
      <p>Feel free to reach out via email or phone.</p>
      <p>Email: contact&#64;example.com</p>
    </div>
  `,
  styles: `.page { padding: 20px; text-align: center; }`
})
export class ContactComponent {}