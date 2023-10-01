import type { LayoutServerLoad } from "./$types";
import {COOKIE_USER_SESSION, HTTPCode} from "$lib/constants";
import {redirect} from "@sveltejs/kit";

export const load = (async (event) => {
    if (!event.cookies.get(COOKIE_USER_SESSION)) {
        throw redirect(HTTPCode.NotModified, event.url.searchParams.get("from") ?? "/classes/login");
    }
    return {
    };
}) satisfies LayoutServerLoad;