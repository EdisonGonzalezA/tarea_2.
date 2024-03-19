import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IActores } from './actores.interface';
import { ACTORES } from 'src/models/models';
import { ActoresDTO } from './dto/actores.dto';

@Injectable()
export class ActoresService {
  constructor(
    @InjectModel(ACTORES.name) private readonly model: Model<IActores>,
  ) {}

  async insertar(actoresDTO: ActoresDTO): Promise<IActores> {
    const newActores = new this.model(actoresDTO);
    return await newActores.save();
  }
  async todos(): Promise<IActores[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IActores> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    actoresDTO: ActoresDTO,
  ): Promise<IActores> {
    return await this.model.findByIdAndUpdate(id, actoresDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}