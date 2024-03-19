import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { PeliculasSchema } from './schema/peliculas.schema';
import { PELICULAS } from 'src/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ActoresModule } from 'src/actores/actores.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PELICULAS.name,
        useFactory: () => PeliculasSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    ActoresModule,
  ],
  controllers: [PeliculasController],
  providers: [PeliculasService],
})
export class PeliculasModule {}
