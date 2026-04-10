import { Routes } from '@angular/router';
import { RegisterPage } from './features/auth/register/register.component';
import { LoginPage } from './features/auth/login/login.component';

export const routes: Routes = [
  { path: 'register', component: RegisterPage },
  { path: 'login', component: LoginPage },

  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'login' },
];
