import type { LayoutServerLoad } from "./$types";
import type {UserMe$result} from "$houdini";
import {UserMeStore} from "$houdini";

export const load = (async (event) => {
    const userMeStore = new UserMeStore();

        await userMeStore.fetch({event}) as {data: UserMe$result}

    return {
    };
}) satisfies LayoutServerLoad;