import { Component } from '@angular/core';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public themeService: Theme) {}
}
