import type { Page } from '@sveltejs/kit';
import StudentService from "$data/services/StudentService";

export async function load({ url, data }: Page) {

	const token = data.token;

	const _class = url.searchParams.get('_class');
	const after = url.searchParams.get('after');
	const first = url.searchParams.get('first') || 10;
	const level = url.searchParams.get('level') ;
	const name = url.searchParams.get('name') ;
	const school = url.searchParams.get('school') ;
	const result = await StudentService.getMyStudents({
		_class,
		level,
		school,
		name,
		after,
		first: +first
	}, token);

	const { totalCount, list, pageInfo } = result;
	return {
		totalCount,
		list,
		pageInfo
	};
}
