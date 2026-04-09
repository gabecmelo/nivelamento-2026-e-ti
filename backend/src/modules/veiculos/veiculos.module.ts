import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { JwtService } from '@nestjs/jwt';
@Module({
  controllers: [VeiculosController],
  providers: [VeiculosService, JwtService],
})
export class VeiculosModule {}
