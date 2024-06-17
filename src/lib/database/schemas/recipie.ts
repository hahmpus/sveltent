import { Schema, model } from "mongoose";
import { ingredientSchema } from "./ingredient";

export interface Recipie {
  name: string;
  ingredients: Schema.Types.ObjectId[] | string[];
}

export const recipieSchema = new Schema<Recipie>({
  name: String,
  ingredients: {
    type: [Schema.Types.ObjectId],
    ref: 'Ingredient'
  },
});
export const RecipieModel = model('Recipie', recipieSchema);