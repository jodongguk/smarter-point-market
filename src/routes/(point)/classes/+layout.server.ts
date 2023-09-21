import type { LayoutServerLoad } from "./$types";
import {UserMeStore} from "$houdini";

export const load = (async (event) => {
    const userMeStore = new UserMeStore();

    const { data } = await userMeStore.fetch({event})

    return {
        localsUser: event.locals.user
    };
}) satisfies LayoutServerLoad;