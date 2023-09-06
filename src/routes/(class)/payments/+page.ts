import type { Page } from '@sveltejs/kit';
import StudentService from "$data/services/StudentService";
import PaymentService from "$data/services/PaymentService";

export async function load({ url, data }: Page) {

	const token = data.token;

	const after = url.searchParams.get('after');
	const classMaster = url.searchParams.get('classMaster');
	const paymentStatus = url.searchParams.get('paymentStatus');
	const isApproved = url.searchParams.get('isApproved');
	const type = url.searchParams.get('type');
	const filteringName = url.searchParams.get('filteringName');
	const filteringDays = url.searchParams.get('filteringDays') || 1;

	const result = await PaymentService.getMyGymClassPaymentMasters({
		after,
		classMaster,
		paymentStatus,
		isApproved: (!!isApproved),
		type,
		filteringName,
		filteringDays: +filteringDays,
	}, token);

	const { totalCount, list, pageInfo } = result;
	return {
		totalCount,
		list,
		pageInfo
	};
}
