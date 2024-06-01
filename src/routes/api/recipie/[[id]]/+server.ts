import prisma from '$lib/database/client';
import type { RequestHandler } from '@sveltejs/kit';


export const GET: RequestHandler = async ({ params }) => {
    if(params.id) {
        
        const recipie = await prisma.recipie.findUnique({
            where: {
                id: String(params.id)
            },
            include: {
              ingredients: {
                select: {
                  ingredient: true
                }
              },
            }
        });
        return new Response(JSON.stringify(recipie));
        
    } else {

        const all = await prisma.recipie.findMany();
        return new Response(JSON.stringify(all));

    }
}

export const POST: RequestHandler = async ({ request }) => {
    const requestData = await request.json();
    await prisma.recipie.create({
        data: {
          name: requestData.name,  // Ensure your `Recipie` model has a `name` field
          ingredients: {
            create: requestData.ingredients.map((ingredientId: string) => ({
              ingredient: {
                connect: { id: ingredientId }
              }
            }))
          }
        }
      });
    return new Response('Recipie created successfully!');
}

export const DELETE: RequestHandler = async ({ params }) => {

  const id = params.id;

  if(id === undefined) {
    return new Response('Must provide id', { status: 400 });
  }

  //delete relationship first
  await prisma.recipieIngredients.deleteMany({
    where: {
      recipieId: String(id)
    }
  });

  //then delete the recipie
  await prisma.recipie.delete({
    where: {
      id: String(id),
    }
  });

  return new Response('Recipie deleted successfully!');
};