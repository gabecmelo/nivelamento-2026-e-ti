import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { VehiclesPage } from '../../vehicles/vehicles.component';

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
  private readonly auth = inject(AuthService);

  protected readonly title = signal('frontend');

  constructor(private router: Router) {}

  email = '';
  password = '';

  goToRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    this.auth.login(this.email, this.password).subscribe(response => {
      if (response.access_token) {
        this.router.navigate(['/vehicles'])
      }
    });
  }
}
