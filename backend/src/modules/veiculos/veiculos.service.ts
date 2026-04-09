import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Injectable()
export class VeiculosService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateVeiculoDto) {
    return this.prisma.client.veiculo.create({ data: dto });
  }

  findAll() {
    return this.prisma.client.veiculo.findMany({
      orderBy: { anoFabricacao: 'desc' }, // TODO: ajustar para createdAt (prisma nao reconhecendo)
    });
  }

  async findOne(id: number) {
    const veiculo = await this.prisma.client.veiculo.findUnique({
      where: { id },
    });
    if (!veiculo) throw new NotFoundException(`Veiculo #${id} não encontrado`);
    return veiculo;
  }

  async update(id: number, dto: UpdateVeiculoDto) {
    await this.findOne(id);
    return this.prisma.client.veiculo.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.veiculo.delete({ where: { id } });
  }
}
