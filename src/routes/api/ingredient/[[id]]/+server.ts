import prisma from '$lib/database/client';
import type { RequestHandler } from '@sveltejs/kit';

//LIST ALL INGREDIENTS
export const GET: RequestHandler = async ({ params }) => {
    if(params.id) {
        console.log(params.id);
        const ingredient = await prisma.ingredient.findUnique({
            where: {
                id: String(params.id)
            }
        });
        return new Response(JSON.stringify(ingredient));
        
    } else {

        const allIngredients = await prisma.ingredient.findMany();
        return new Response(JSON.stringify(allIngredients));

    }
}

export const POST: RequestHandler = async ({ request }) => {
    const requestData = await request.json();
    console.log(requestData);
    await prisma.ingredient.create({
        data: {
          name: String(requestData.name),
        }
      });
    return new Response('ingredient created successfully!');
}