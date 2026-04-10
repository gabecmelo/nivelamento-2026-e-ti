import { Injectable, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs';

interface LoginResponse {
  access_token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  readonly isLoggedIn = signal(!!localStorage.getItem('access_token'));

  login(email: string, password: string) {
    return this.api.post<LoginResponse>('auth/login', { email, password }).pipe(
      tap((res) => {
        localStorage.setItem('access_token', `Bearer ${res.access_token}`);
        this.isLoggedIn.set(true);
      }),
    );
  }

  register(email: string, password: string, name?: string) {
    return this.api.post('auth/register', { name, email, password }); 
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isLoggedIn.set(false);
  }
}
