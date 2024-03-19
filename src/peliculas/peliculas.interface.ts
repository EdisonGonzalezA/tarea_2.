import { IActores } from "src/actores/actores.interface";

export interface IPeliculas {
    titulo: string;
    genero: string;
    anio: Date;
    director: string;
    actores: IActores[];
  }