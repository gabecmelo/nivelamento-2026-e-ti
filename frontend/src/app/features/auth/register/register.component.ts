import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

interface User {
  name?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.page.html',
})
export class RegisterPage {
  private readonly auth = inject(AuthService);
  protected readonly title = signal('frontend');

  constructor(private router: Router) {}

  name = ''; // TODO: registro com nome (se for necessário)
  email = '';
  password = '';

  goToLogin() {
    this.router.navigate(['/login']);
  }

  createAccount() {
    this.auth.register(this.email, this.password).subscribe();
  }

  validatePassword() {
    // TODO: validar senha igual
  }
}
