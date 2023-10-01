import type { LayoutServerLoad } from "./$types";
import {UserMeByParentStore, type UserMeByParent$result} from "$houdini";
import {COOKIE_USER_SESSION, HTTPCode} from "$lib/constants";
import {redirect} from "@sveltejs/kit";

export const load = (async (event) => {
    if (!event.cookies.get(COOKIE_USER_SESSION)) {
        throw redirect(HTTPCode.NotModified, event.url.searchParams.get("from") ?? "/parents/login");
    }

    const userMeStore = new UserMeByParentStore();

    const {data} = await userMeStore.fetch({event}) as {data: UserMeByParent$result};

    return {
        userMe: data.userMe
    };
}) satisfies LayoutServerLoad;