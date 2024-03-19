import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
//import { PassengerModule } from './passenger/passenger.module';
//import { VuelosModule } from './vuelos/vuelos.module';
import { PeliculasController } from './peliculas/peliculas.controller';
import { PeliculasModule } from './peliculas/peliculas.module';
import { ActoresService } from './actores/actores.service';
import { ActoresModule } from './actores/actores.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    UsersModule,
    PeliculasModule,
    ActoresModule,
    //PassengerModule,
    //VuelosModule,
  ],
  controllers: [AppController, PeliculasController],
  providers: [AppService, ActoresService],
})
export class AppModule {}