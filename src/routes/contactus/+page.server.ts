import type { PageServerLoad } from './$types';

export const actions = {
  sendEmail: async ({ cookies, request }) => {
    console.log('hello world')
    const data = await request.formData();
    console.log(data)
  },
};