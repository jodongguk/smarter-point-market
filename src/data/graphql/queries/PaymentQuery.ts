import {gql} from "graphql-request";


export default class PaymentQuery {

    static MyGymClassPaymentMasters = gql`
		query MyGymClassPaymentMasters(
            $after: String, 
            $classMaster: String, 
            $paymentStatus: String, 
            $isApproved: Boolean, 
            $type: String, 
            $filteringName: String, 
            $filteringDays: Int
        ) {
            __typename
            myGymClassPaymentMasters(
                first: 10, 
                after: $after, 
                classMaster_Name: $classMaster, 
                paymentStatus: $paymentStatus, 
                isApproved: $isApproved, 
                type: $type, 
                filteringName: $filteringName, 
                filteringDays: $filteringDays
            ) {
                __typename
                totalCount
                pageInfo {
                    __typename
                    hasNextPage
                    endCursor
                }
                edges {
                __typename
                node {
                    __typename
                    id
                    isApproved
                    classPaymentMasterId
                    classMaster {
                        __typename
                        name
                    }
                    student {
                        __typename
                        name
                        birthday
                        gender
                        phone
                        dateEntered
                        classDateStart
                        parent {
                            __typename
                            user {
                                __typename
                                name
                                phone
                            }
                        }
                    }
                    dateToPay
                    paymentStatus
                    priceToPay
                    datePaid
                    type
                    memo
                }
            }
        }
    }`;

}
