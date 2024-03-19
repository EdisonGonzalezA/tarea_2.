import mongoose from "mongoose";

export const ActoresSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: String, required: true },
    genero: { type: String, required: true },
    nacionalidad: { type: String, required: true }
});

ActoresSchema.index({ nombre: 1 }, { unique: true });
