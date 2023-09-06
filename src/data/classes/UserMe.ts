

export default class UserMe {
    id: string
    identification: string
    name: string
    isAdmin: boolean
    group: string
    agency: any
    subcontractor: any

    constructor({
        id,
        identification,
        name,
        isAdmin,
        group,
        agency,
        subcontractor,
    }: {
        id: string
        identification: string
        name: string
        isAdmin: boolean
        group: string
        agency?: any
        subcontractor?: any
    }) {
        this.id = id;
        this.identification = identification;
        this.name = name;
        this.isAdmin = isAdmin;
        this.group = group;
        this.agency = agency;
        this.subcontractor = subcontractor;
    }
}