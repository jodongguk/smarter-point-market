import type { PageServerLoad } from './$types';
import {type BudgetList$result, BudgetListStore} from "$houdini";
import {get} from "svelte/store";
import {userSelectInstitute} from "$lib/stores";

export const load: PageServerLoad = async (event) => {

    const budgetListStore = new BudgetListStore();

    const {data} = await budgetListStore.fetch({
        variables: {
            instituteId: get(userSelectInstitute).id
        },
        event
    }) as {data: BudgetList$result}

    return {
        list: data.budgets?.edges?.map(value => value?.node)
    }
};