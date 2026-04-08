import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshDto {
  @ApiProperty({ example: 'refresh_token' })
  @IsString()
  refresh_token!: string;
}
