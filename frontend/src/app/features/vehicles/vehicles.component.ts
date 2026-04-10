import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

interface Vehicle {
  id: number;
  modelo: string;
  anoFabricacao: number;
  placa: string;
  createdAt: string;
}

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.page.html',
})
export class VehiclesPage {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);

  vehicles = signal<Vehicle[]>([]);
  loading = signal(true);
  error = signal('');

  constructor() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.loading.set(true);
    this.error.set('');

    this.api.get<Vehicle[]>('veiculos').subscribe({
      next: (result) => {
        this.vehicles.set(result);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Não foi possível carregar os veículos.');
        this.loading.set(false);
      },
    });
  }

  goToCreate() {
    this.router.navigate(['/vehicles/create']);
  }
}
