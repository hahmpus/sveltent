import { Schema, model } from "mongoose";

export const nutrientSchema = new Schema({
    name: String,
    amount: Number,
    unit: String
});
export const NutrientModel = model('Nutrient', nutrientSchema);

export const ingredientSchema = new Schema({
    name: String,
    nutrients: [nutrientSchema]
});
export const IngredientModel = model('Ingredient', ingredientSchema);