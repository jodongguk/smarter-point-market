import { redirect } from '@sveltejs/kit';
import HttpClient from '$data/graphql/client';
import type { LayoutServerLoad } from './$types';
import UserService from "$data/services/UserService";

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	const token = cookies.get('JWT');

	if (url.pathname !== '/login') {
		const client = HttpClient.getInstance();
		try {
			await client.checkAuth(token);
		} catch (_) {
			throw redirect(302, '/login');
		}
	}

	const me = await UserService.getMe(token);
	return {
		me
	};
};
