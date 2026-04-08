import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Gabriel Melo' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'gabriel@email.com' })
  @IsEmail()
  email!: string;
  
  @ApiProperty({ example: 'senha123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password!: string;
}