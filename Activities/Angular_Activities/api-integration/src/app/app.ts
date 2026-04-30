import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  users: any[] = [];
  isLoading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading = true;
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          this.isLoading = false;
        }
      });
  }
}