import CsRequestService from '$data/services/CsRequestService';
import type { Page } from '@sveltejs/kit';

export async function load({ url }: Page) {
	const category = url.searchParams.get('category') ?? '전체';
	const page = url.searchParams.get('page') ?? '1';
	const keyword = url.searchParams.get('keyword');
	const csState = url.searchParams.get('csState') ?? '전체';
	const start = url.searchParams.get('start');
	const end = url.searchParams.get('end');

	const { totalCount, csRequests } = await CsRequestService.getRequests({
		category,
		page,
		keyword,
		csState,
		start,
		end
	});

	return {
		totalCount,
		csRequests
	};
}
