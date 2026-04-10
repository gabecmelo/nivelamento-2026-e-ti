import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-vehicle-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicles-create.page.html',
})
export class VehicleCreatePage {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);

  modelo = '';
  placa = '';
  anoFabricacao: number | null = null;
  saving = signal(false);
  error = signal('');

  async createVehicle() {
    const ano = Number(this.anoFabricacao);

    if (!this.modelo || !this.placa || !ano) {
      this.error.set('Preencha todos os campos corretamente.');
      return;
    }

    this.saving.set(true);
    this.error.set('');

    this.api.post('veiculos', {
      modelo: this.modelo,
      placa: this.placa,
      anoFabricacao: ano,
    }).subscribe({
      next: () => this.router.navigate(['/vehicles']),
      error: () => {
        this.error.set('Não foi possível criar o veículo.');
        this.saving.set(false);
      },
    });
  }

  cancel() {
    this.router.navigate(['/vehicles']);
  }
}
