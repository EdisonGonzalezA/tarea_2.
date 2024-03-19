import mongoose from 'mongoose';
export const PeliculasSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    genero: { type: String, required: true },
    anio: { type: Date, required: true },
    director: { type: String, required: true },
    actores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'actores' }],
  },
  {
    timestamps: true,
  },
);