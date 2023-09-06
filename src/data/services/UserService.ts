import HttpClient from '$data/graphql/client';
import UserQuery from "$data/graphql/queries/UserQuery";
import type UserMe from "$data/classes/UserMe";

export default class UserService {

	static async getMe(token?: string) {
		const client = HttpClient.getInstance();

		let result = await client.request(UserQuery.me, {token}) as {
			me: UserMe
		};
		return result.me;
	}
}
