import HttpClient from "$data/graphql/client";
import PaymentQuery from "$data/graphql/queries/PaymentQuery";

export default class PaymentService {
    static async getMyGymClassPaymentMasters({
            after,
            classMaster,
            paymentStatus,
            isApproved,
            type,
            filteringName,
            filteringDays,
        }: {
            after: string | null,
            classMaster: string | null,
            paymentStatus: string | null,
            isApproved: boolean | false,
            type: string | null,
            filteringName: string | null,
            filteringDays: number,
        }, token?: string) {

        const client = HttpClient.getInstance();
        const headers = new Headers();

        if(token) {
            headers.set('cookie', `JWT=${token}`)
        }

        const result = (await client.request(PaymentQuery.MyGymClassPaymentMasters, {
            after,
            classMaster,
            paymentStatus,
            isApproved,
            type,
            filteringName,
            filteringDays,
        }, headers)) as {
            myGymClassPaymentMasters: {
                __typename: string
                totalCount: number
                pageInfo: {
                    __typename: string
                    hasNextPage: boolean
                    endCursor: string
                }
                edges: {
                    node: {
                        __typename: string
                        id: string
                        isApproved: boolean
                        classPaymentMasterId: number
                        classMaster: {
                            __typename: string
                            name: string
                        }
                        student: {
                            __typename: string
                            name: string
                            birthday: string
                            gender: string
                            phone: string
                            dateEntered: string
                            classDateStart: string
                            parent: {
                                __typename: string
                                user: {
                                    __typename: string
                                    name: string
                                    phone: string
                                }
                            }
                        }
                        dateToPay: string
                        paymentStatus: string
                        priceToPay: number
                        datePaid: any
                        type: string
                        memo: any
                    }
                }[]
            },
            totalCount: number,
        };
        return {
            totalCount: result.myGymClassPaymentMasters.totalCount,
            pageInfo: result.myGymClassPaymentMasters.pageInfo,
            list: result.myGymClassPaymentMasters.edges.map((e) => e.node)
        };
    }

}