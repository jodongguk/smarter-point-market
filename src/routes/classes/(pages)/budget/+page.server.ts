import type { PageServerLoad } from './$types';
import {type BudgetList$result, BudgetListStore} from "$houdini";

export const load: PageServerLoad = async (event) => {

    const budgetListStore = new BudgetListStore();

    const {data} = await budgetListStore.fetch({
        variables: {
            instituteId: "1"
        },
        event
    }) as {data: BudgetList$result}

    return {
        list: data.budgets?.edges?.map(value => value?.node)
    }
};