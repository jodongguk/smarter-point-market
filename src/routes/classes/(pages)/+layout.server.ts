import type { LayoutServerLoad } from "./$types";
import type {UserMe$result} from "$houdini";
import {UserMeStore} from "$houdini";
import {COOKIE_USER_SESSION, HTTPCode} from "$lib/constants";
import {redirect} from "@sveltejs/kit";

export const load = (async (event) => {

    if (!event.cookies.get(COOKIE_USER_SESSION)) {
        throw redirect(HTTPCode.NotModified, event.url.searchParams.get("from") ?? "/classes/login");
    }

    const userMeStore = new UserMeStore();

    const fetchData = await userMeStore.fetch({event}) as {data: UserMe$result};


    return {
        userMe: fetchData.data.userMe
    };
}) satisfies LayoutServerLoad;