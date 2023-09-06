import { gql } from 'graphql-request';

export default class UserMutations {
	static getToken = gql`
		mutation Login(
			$identification: String!, 
			$password: String!
			$fcmToken: String
		) {
			tokenAuth(
				identification: $identification, 
				password: $password
				fcmToken: $fcmToken
			) {
				token
				refreshToken
				user {
					id
					identification
					name
					isAdmin
					group
					subcontractor {
						name
					}
				}
			}
		}
	`;

	static deleteTokenCookie = gql`
		mutation DeleteTokenCooke {
			deleteTokenCookie {
				deleted
			}
		}
	`;

	static checkIsAdmin = gql`
		mutation CheckIsAdmin {
			checkIsAdmin {
				success
			}
		}
	`;

	static checkIsTa = gql`
		mutation CheckIsTa {
			checkIsTa {
				success
			}
		}
	`;

	static checkIsActive = gql`
		mutation checkIsActive {
			checkIsActive {
				isActive
				isGym
			}
		}
	`;
}
