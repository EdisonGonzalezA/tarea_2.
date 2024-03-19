import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PELICULAS } from 'src/models/models';
import { IPeliculas } from './peliculas.interface';
import { PeliculasDTO } from './dto/peliculas.dto';


@Injectable()
export class PeliculasService {
  constructor(
    @InjectModel(PELICULAS.name) private readonly model: Model<IPeliculas>,
  ) {}
  insertar(peliculasDTO: PeliculasDTO): Promise<IPeliculas> {
    const nuevaPelicula = new this.model(PeliculasDTO);
    return nuevaPelicula.save();
  }
  todos(): Promise<IPeliculas[]> {
    return this.model.find().populate('actores');
  }
  uno(id: string): Promise<IPeliculas> {
    return this.model.findById(id).populate('actores');
  }
  actualizar(id: string, PeliculasDTO: PeliculasDTO): Promise<IPeliculas> {
    return this.model.findByIdAndUpdate(id, PeliculasDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Pelicula eliminada' };
  }
  async insertarActor(
    peliculasId: string,
    actoresId: string,
  ): Promise<IPeliculas> {
    return await this.model
      .findByIdAndUpdate(
        peliculasId,
        { $addToSet: { actores: actoresId } },
        { new: true },
      )
      .populate('actores');
  }
}