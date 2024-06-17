import { RecipieModel } from '$lib/database/schemas/recipie';
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler = async ({ params }) => {
    if(params.id) {
        const recipie = await RecipieModel.findById(params.id).populate('ingredients');
        return new Response(JSON.stringify(recipie));
        
    } else {

        const all = await RecipieModel.find({}).populate('ingredients');
        return new Response(JSON.stringify(all));

    }
}

export const POST: RequestHandler = async ({ request }) => {
    const requestData = await request.json();
    const newRecipie = new RecipieModel({
        name: requestData.name,
        ingredients: requestData.ingredients
    });
    await newRecipie.save();
    return new Response('Recipie created successfully!');
}

export const DELETE: RequestHandler = async ({ params }) => {

  const id = params.id;

  if(id === undefined) {
    return new Response('Must provide id', { status: 400 });
  }

  await RecipieModel.findByIdAndDelete(id);

  return new Response('Recipie deleted successfully!');
};