import type {LayoutServerLoad} from "./$types";
import {COOKIE_USER_SESSION, HTTPCode} from "$lib/constants";
import {redirect} from "@sveltejs/kit";
import {UserMeByInstituteStore, type UserMeByInstitute$result} from "$houdini";

export const load = (async (event) => {
    if (!event.cookies.get(COOKIE_USER_SESSION)) {
        throw redirect(HTTPCode.NotModified, event.url.searchParams.get("from") ?? "/classes/login");
    }

    const userMeStore = new UserMeByInstituteStore();

    const {data} = await userMeStore.fetch({event}) as { data: UserMeByInstitute$result };

    return {
        userMe: data.userMe
    };
}) satisfies LayoutServerLoad;