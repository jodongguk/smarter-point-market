import type { PageServerLoad } from './$types';
import {
    AssignmentListStore,
    type AssignmentList$result,
    AssignmentSubmitListStore,
    type AssignmentSubmitList$result
} from "$houdini";
import {userSelectInstitute} from "$lib/stores";
import {get} from "svelte/store";

export const load: PageServerLoad = async (event) => {

    const assignmentListStore = new AssignmentListStore();
    const assignmentSubmitListStore = new AssignmentSubmitListStore();

    const {data} = await assignmentListStore.fetch({
        variables: {
            instituteId: get(userSelectInstitute).id
        },
        event
    }) as {data : AssignmentList$result}

    let assignmentList = data.assignments?.edges?.map(value => value?.node);
    let assignmentId = event.url.searchParams.get('assignmentId') ?? data.assignments?.edges[0].node.id;

    const result = await assignmentSubmitListStore.fetch({
        variables: {
            assignmentId: assignmentId
        },
        event
    }) as {data: AssignmentSubmitList$result};

    const submitList = result.data.assignmentSubmits?.map(value => value);

    return {
        assignmentList,
        assignmentId,
        submitList
    }
};