import type {RequestEvent} from "@sveltejs/kit";
import {
    type InputAssignmentSubmit,
    type AssignmentSubmitTypeSave$result,
    AssignmentSubmitTypeSaveStore
} from "$houdini";


export default class AssignmentSerivce {
    static async submitSuccess(variables: {
        list: [InputAssignmentSubmit],
    }, event?: RequestEvent) {


        variables.list.forEach(value => {
            value.assignmentSubmitType = "success";
        })

        return await this.assignmentSubmitTypeSave(variables, event);
    }

    static async submitReject(variables: {
        list: [InputAssignmentSubmit],
    }, event?: RequestEvent) {

        variables.list.forEach(value => {
            value.assignmentSubmitType = "reject";
        })

        return await this.assignmentSubmitTypeSave(variables, event);
    }

    private static async assignmentSubmitTypeSave(variables: {
        list: [InputAssignmentSubmit],
    }, event?: RequestEvent) {
        const assignmentSubmitTypeSaveStore = new AssignmentSubmitTypeSaveStore();
        const {data} = await assignmentSubmitTypeSaveStore.mutate({
            list: variables.list
        }, event) as { data: AssignmentSubmitTypeSave$result }

        return data?.assignmentSubmitType;
    }
}