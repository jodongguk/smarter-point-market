import HttpClient from '$data/graphql/client';
import UserMutations from '$data/graphql/mutations/UserMutations';
import AuthService from "$data/services/auth/AuthService";
import {ExternalServiceError} from "$data/exception/ExternalServiceError";

export default class GymAuthService extends AuthService {

	static async getToken({ id, password }: { id: string; password: string }) {
		const client = HttpClient.getInstance();

		const token = await this.getLoginToken({id, password});

		const {
			checkIsActive: {isActive,isGym}
		} = (await client.request(UserMutations.checkIsActive)) as {
			checkIsActive: {
				isActive: boolean,
				isGym: boolean
			}
		};

		if (!isGym) {
			await this.deleteTokenCookies();
			throw new ExternalServiceError("권한이 없습니다.");
		}

		return token;
	}

}
