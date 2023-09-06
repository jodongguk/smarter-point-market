import { gql } from "graphql-request";

export default class UserQuery {

    static me = gql`
		query Me($token: String) {
			me(token: $token) {
				id
				identification
				name
				isAdmin
				group
				agency {
					id
					name
				}
				subcontractor {
					name
					isPreWorking
				}
			}
		}
	`;

}