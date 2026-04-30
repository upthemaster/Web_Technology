import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  student = {
    name: 'Utkarsh Patil',
    course: 'Web Technology (Angular)',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
  };

  changeImage() {
    // Bonus: Change image dynamically using property binding
    this.student.imageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png';
  }
}