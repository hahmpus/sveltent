import type { Handle } from '@sveltejs/kit';
import { connect } from '$lib/database/mongoose';

await connect();

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};