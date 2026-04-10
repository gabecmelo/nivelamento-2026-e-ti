import { Routes } from '@angular/router';
import { RegisterPage } from './features/auth/register/register.component';
import { LoginPage } from './features/auth/login/login.component';
import { VehiclesPage } from './features/vehicles/vehicles.component';
import { VehicleCreatePage } from './features/vehicles/vehicles-create.component';

export const routes: Routes = [
  { path: 'register', component: RegisterPage },
  { path: 'login', component: LoginPage },
  { path: 'vehicles', component: VehiclesPage },
  { path: 'vehicles/create', component: VehicleCreatePage },

  { path: '**', redirectTo: 'login' },
];
