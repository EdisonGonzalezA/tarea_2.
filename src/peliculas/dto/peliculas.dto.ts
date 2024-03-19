import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PeliculasDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly titulo: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly genero: string;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly anio;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly director: string;
}