import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PeliculasService } from './peliculas.service';
import { ActoresService } from 'src/actores/actores.service';
import { PeliculasDTO } from './dto/peliculas.dto';
  @ApiTags('peliculas')
  @Controller('api/v1/peliculas')
  export class PeliculasController {
    constructor(
      private readonly peliculasService: PeliculasService,
      private readonly actoresService: ActoresService,
    ) {}
    @Post()
    @ApiOperation({ summary: 'Crea Pelicula' })
    insertar(@Body() peliculasDTO: PeliculasDTO) {
      return this.peliculasService.insertar(peliculasDTO);
    }
    @Get()
    @ApiOperation({ summary: 'Selecciona todos los Vuelos' })
    todos() {
      return this.peliculasService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.peliculasService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() peliculasDTO: PeliculasDTO) {
      return this.peliculasService.actualizar(id, peliculasDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.peliculasService.eliminar(id);
    }
    @Post(':peliculasId/actores/:actoresId')
    async agregarActores(
      @Param('peliculasId') peliculasId: string,
      @Param('actoresId') actoresId: string,
    ) {
      const actores = await this.actoresService.uno(actoresId);
      if (!actores)
        throw new HttpException('Actores not found', HttpStatus.NOT_FOUND);
      return this.peliculasService.insertarActores(peliculasId, actoresId);
    }
  }
/*import { Controller } from '@nestjs/common';

@Controller('peliculas')
export class PeliculasController {}*/
