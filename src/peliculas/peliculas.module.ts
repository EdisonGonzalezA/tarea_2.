import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';

@Module({
  providers: [PeliculasService]
})
export class PeliculasModule {}
