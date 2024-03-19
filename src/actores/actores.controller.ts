import {Body, Controller, Delete, Get, Param, Post, Put,} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActoresService } from './actores.service';
import { ActoresDTO } from './dto/actores.dto';
  @ApiTags('actores')
  @Controller('api/v1/actores')
  export class ActoresController {
    constructor(private readonly actoresService: ActoresService) {}
  
    @Post()
    insertar(@Body() actoresDTO: ActoresDTO) {
      return this.actoresService.insertar(actoresDTO);
    }
    @Get()
    todos() {
      return this.actoresService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.actoresService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() actoresDTO: ActoresDTO) {
      return this.actoresService.actualizar(id, actoresDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.actoresService.eliminar(id);
    }
  }
