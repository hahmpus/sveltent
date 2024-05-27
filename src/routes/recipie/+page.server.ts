import type { PageServerLoad, Actions } from './$types';
import prisma from '$lib/database/client';

export const load: PageServerLoad = async ({ params }) => {
	const allUsers = await prisma.user.findMany()
    return {
        props: {
            users: allUsers
        }
    };
}

export const actions = {
    addUser: async (event) => {
        await prisma.user.create({
			data: {
				name: 'John Doe',
				email: 'sdaasdasd'
			}
		});
    }
} satisfies Actions;