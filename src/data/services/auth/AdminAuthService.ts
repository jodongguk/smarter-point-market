import HttpClient from '$data/graphql/client';
import UserMutations from '$data/graphql/mutations/UserMutations';
import AuthService from "$data/services/auth/AuthService";
import {ExternalServiceError} from "$data/exception/ExternalServiceError";

export default class AdminAuthService extends AuthService {

	static async getToken({ id, password }: { id: string; password: string }) {
		const client = HttpClient.getInstance();

		const token = await this.getLoginToken({id, password});

		const {
			checkIsAdmin: { success }
		} = (await client.request(UserMutations.checkIsAdmin)) as {
			checkIsAdmin: {
				success: boolean;
			};
		};

		if (!success) {
			await this.deleteTokenCookies();
			throw new ExternalServiceError("권한이 없습니다.");
		}

		return token;
	}

}
