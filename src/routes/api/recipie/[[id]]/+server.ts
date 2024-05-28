import prisma from '$lib/database/client';
import type { RequestHandler } from '@sveltejs/kit';

//LIST ALL USERS
export const GET: RequestHandler = async ({ params }) => {
    if(params.id) {
        
        const user = await prisma.user.findUnique({
            where: {
                id: Number(params.id)
            }
        });
        return new Response(JSON.stringify(user));
        
    } else {

        const allUsers = await prisma.user.findMany();
        return new Response(JSON.stringify(allUsers));

    }
}

export const POST: RequestHandler = async ({ request }) => {
    const requestData = await request.json();
    await prisma.user.create({
        data: {
            name: requestData.name,
            email: requestData.email
        }
    });
    return new Response('User created');
}