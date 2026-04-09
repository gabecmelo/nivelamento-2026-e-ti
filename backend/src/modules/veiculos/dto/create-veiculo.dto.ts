import { IsString, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVeiculoDto {
  @ApiProperty({ example: 'Fiat Palio' })
  @IsString()
  modelo!: string;

  @ApiProperty({ example: 1998 })
  @IsInt()
  @Min(1900)
  anoFabricacao!: number;

  @ApiProperty({ example: 'AUG8L93' })
  @IsString()
  placa!: string;
}
