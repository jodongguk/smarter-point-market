import HttpClient from "$data/graphql/client";
import StudentQuery from "$data/graphql/queries/StudentQuery";

export default class StudentService {

    static async getMyStudents({
        _class,
        level,
        school,
        name,
        after,
        first
    }: {
        _class: string | null,
        level: string | null,
        school: string | null,
        name: string | null,
        after: string | null,
        first?: number,
    }, token?: string
    ) {
        const client = HttpClient.getInstance();
        const headers = new Headers();

        if(token) {
            headers.set('cookie', `JWT=${token}`)
        }

        const result = (await client.request(StudentQuery.MyStudents, {
            _class,
            level,
            school,
            name,
            after,
            first,
        }, headers)) as {
            myStudents: {
                totalCount: number,
                pageInfo: {
                    endCursor: string,
                    hasNextPage: number,
                },
                edges: {
                    node: {
                        studentId: number
                        name: string
                        birthday: string
                        gender: string
                        phone: string
                        school: {

                        }
                        status: string
                        classMaster: {
                            name: string
                        }
                        level: {
                            name: string
                        }
                        parent: {
                            user: {
                                name: string
                                phone: string
                            }
                        }
                    }
                }[]
            }
        };

        return {
            totalCount: result.myStudents.totalCount,
            pageInfo: result.myStudents.pageInfo,
            list: result.myStudents.edges.map((e) => e.node)
        };
    }

    static async getStudent({
            id,
        }: {
            id: number
        }) {
        const client = HttpClient.getInstance();
        const result = (await client.request(StudentQuery.Student, {
            id
        })) as {
            student: {
                name: string
                birthday: string
                gender: string
                weight: any
                height: any
                phone: string
                dayToPay: number
                dateEntered: string
                classDateStart: any
                priceToPay: number
                memo: any
                memoForHealth: any
                memoForPrice: any
                status: string
                school: {
                    name: string
                }
                classMaster: {
                    name: string
                }
                level: {
                    name: string
                }
                parent: {
                    id: string
                    user: {
                        identification: string
                        name: string
                        phone: string
                    }
                    address: string
                    detailAddress: string
                    zipCode: string
                    relationship: {
                        name: string
                    }
                    supporterName: any
                    supporterRelationship: any
                    supporterPhone: any
                }
            };
        };
        return {
            student: result.student
        };
    }

}