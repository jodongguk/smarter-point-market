import type { PageServerLoad } from './$types';
import {type AssignmentList$result, AssignmentListStore} from "$houdini";

export const load: PageServerLoad = async (event) => {

    const assignmentListStore = new AssignmentListStore();

    const {data} = await assignmentListStore.fetch({
        variables: {
            instituteId: "1"
        },
        event
    }) as {data: AssignmentList$result}

    return {
        list: data.assignments?.edges?.map(value => value?.node)
    }
};