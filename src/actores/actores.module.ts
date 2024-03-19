import { Module } from '@nestjs/common';
import { ActoresController } from './actores.controller';
import { ActoresService } from './actores.service';
import { ACTORES } from 'src/models/models';
import { ActoresSchema } from './schema/actores.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: ACTORES.name,
      useFactory: () => ActoresSchema,
    },
  ]),
  ],
  controllers: [ActoresController],
  providers: [ActoresService],
  exports: [ActoresService],
})
export class ActoresModule {}
