import type { PageServerLoad } from './$types';
import {AssignmentListStore, type AssignmentList$result} from "$houdini";
import {userSelectChildren} from "$lib/stores";
import {get} from "svelte/store";

export const load: PageServerLoad = async (event) => {

    const assignmentListStore = new AssignmentListStore();

    const {data} = await assignmentListStore.fetch({
        variables: {
            children: get(userSelectChildren).id
        },
        event
    }) as {data : AssignmentList$result}

    let assignmentList = data.assignments?.edges?.map(value => value?.node);
    let assignmentId = event.url.searchParams.get('assignmentId') ?? data.assignments?.edges[0].node.id;

    let assignment = assignmentList?.find(assignment => assignment?.id === assignmentId);

    return {
        assignmentList,
        assignmentId,
        assignment
    }
};