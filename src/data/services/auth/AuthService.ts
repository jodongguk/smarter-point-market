import HttpClient from '$data/graphql/client';
import UserMutations from '$data/graphql/mutations/UserMutations';
import {ExternalServiceError} from "$data/exception/ExternalServiceError";
import {InternalServiceError} from "$data/exception/InternalServiceError";
import {CommonServiceError} from "$data/exception/CommonServiceError";
import type {GraphQLError} from "graphql/error";

export default abstract class AuthService {

	static getError(err) {
		if (err.response && err.response.errors && err.response.errors.length > 0) {
			const message = err.response.errors
				.map((graphqlError: GraphQLError) => {
					const path = graphqlError.path ? `(${graphqlError.path}) ` : "";
					const errorMessage = graphqlError.message || "Unknown error";
					return `${path}${errorMessage}`;
				})
				.join("\n");
			return new ExternalServiceError(message);
		}

		if (err.response && err.response.status >= 500) {
			return new InternalServiceError(
				`Please contact support - ${err.message}`,
			);
		}

		return new CommonServiceError(err.message);
	}

	static async getLoginToken({ id, password }: { id: string; password: string }) {
		const client = HttpClient.getInstance();

		try {
			return (await client.request(UserMutations.getToken, {
				identification: id,
				password
			})) as {
				tokenAuth: {
					token: string;
					refreshToken: string;
				};
			};

		} catch (e) {
			throw this.getError(e);
		}
	}

	static async deleteTokenCookies() {
		const client = HttpClient.getInstance();
		const result = (await client.request(UserMutations.deleteTokenCookie)) as {
			deleteTokenCookie: {
				deleted: boolean;
			};
		};
		return result.deleteTokenCookie.deleted;
	}
}
