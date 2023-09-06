import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, cookies }) => {
    const token = cookies.get('JWT');

    return {
        token
    };
}
