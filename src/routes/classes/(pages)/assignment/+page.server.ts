import type { PageServerLoad } from './$types';
import {type AssignmentList$result, AssignmentListStore} from "$houdini";
import {get} from "svelte/store";
import {userSelectInstitute} from "$lib/stores";

export const load: PageServerLoad = async (event) => {

    const assignmentListStore = new AssignmentListStore();

    const {data} = await assignmentListStore.fetch({
        variables: {
            instituteId: get(userSelectInstitute).id
        },
        event
    }) as {data: AssignmentList$result}

    return {
        list: data.assignments?.edges?.map(value => value?.node)
    }
};