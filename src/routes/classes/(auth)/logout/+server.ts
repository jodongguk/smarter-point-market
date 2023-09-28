import {
    COOKIE_SESSION_OPTIONS,
    COOKIE_PERSISTENT_OPTIONS,
    COOKIE_USER_REFRESH,
    COOKIE_USER_SESSION,
    HTTPCode
} from "$lib/constants";
import {redirect} from "@sveltejs/kit";

export async function GET({cookies, locals, url}) {

    locals.user = null;
    cookies.delete(COOKIE_USER_SESSION, COOKIE_SESSION_OPTIONS);
    cookies.delete(COOKIE_USER_REFRESH, COOKIE_PERSISTENT_OPTIONS);

    throw redirect(302, 'login');
}