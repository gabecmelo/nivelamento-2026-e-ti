import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  name?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.page.html',
})
export class LoginPage {
  private readonly api = inject(ApiService);

  protected readonly title = signal('frontend');

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
