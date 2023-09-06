import {gql} from "graphql-request";


export default class StudentQuery {

    static MyStudents = gql`
		query MyStudents(
                $_class: String, 
                $level: String, 
                $school: String, 
                $name: String, 
                $after: String,
                $first: Int
		    ) {
                myStudents(
                first:$first 
                after: $after 
                classMaster_Name: $_class 
                level_Name: $level 
                school_Name_Icontains: $school 
                name_Icontains: $name
            ) {
                totalCount
                pageInfo {
                    endCursor
                    hasNextPage
                }
                edges{
                    node {
                        studentId
                        name
                        birthday
                        gender
                        phone
                        school {
                            name
                        }
                        status
                        classMaster {
                            name
                        }
                        level {
                            name
                        }
                        parent {
                            user {
                                name
                                phone
                            }
                        }
                    }
                }
            }
        }
	`;
    static Student = gql`
        query Student($id: Int) {
            student (
                id: $id
            ) {
                name
                birthday
                gender
                weight
                height
                phone
                dayToPay
                dateEntered
                classDateStart
                priceToPay
                memo
                memoForHealth
                memoForPrice
                school {
                    name
                }
                status
                classMaster {
                    name
                }
                level {
                    name
                }
                parent {
                    id
                    user {
                        identification
                        name
                        phone
                    }
                    address
                    detailAddress
                    zipCode
                    relationship {
                        name
                    }
                    supporterName
                    supporterRelationship {
                        name
                    }
                    supporterPhone
                }
            }
        }
    `;

}
