import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  code: String,
  status: Number,
});