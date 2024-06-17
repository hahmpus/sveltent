import { IngredientModel } from '$lib/database/schemas/ingredient';
import type { RequestHandler } from '@sveltejs/kit';

//LIST ALL INGREDIENTS
export const GET: RequestHandler = async ({ params }) => {
    if(params.id) {
        console.log(params.id);
        const ingredient = await IngredientModel.findById(params.id);
        return new Response(JSON.stringify(ingredient));
        
    } else {

        const allIngredients = await IngredientModel.find({});
        return new Response(JSON.stringify(allIngredients));

    }
}

export const POST: RequestHandler = async ({ request }) => {
    const requestData = await request.json();
    console.log(requestData);
    const newIngredient = new IngredientModel({
        name: requestData.name,
        nutrients: requestData.nutrients
    });
    await newIngredient.save();
    return new Response('ingredient created successfully!');
}