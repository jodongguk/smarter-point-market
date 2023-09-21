import {error, fail, redirect} from "@sveltejs/kit";
import type {Actions, PageServerLoad} from "./$types";
import {getMissingFields} from "$lib/utils/getMissingFields";
import {UserLoginStore} from "$houdini";
import {
    COOKIE_SESSION_OPTIONS,
    COOKIE_PERSISTENT_OPTIONS,
    COOKIE_USER_REFRESH,
    COOKIE_USER_SESSION,
    HTTPCode
} from "$data/consts/Common";

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const dataFields = {
            userid: data.get("userid")?.toString(),
            password: data.get("password")?.toString()
        };

        const missing = getMissingFields(dataFields);
        if (missing.length > 0) return fail(HTTPCode.BadRequest, {missing});

        try {
            const userLoginStore = new UserLoginStore();
            const fields = dataFields as Record<keyof typeof dataFields, string>;
            const {data} = await userLoginStore.mutate(fields, {event});
            if (data == null) {
                throw Error("Login returned a value of undefined.");
            }
            event.cookies.set(COOKIE_USER_SESSION, data.login.accessToken, COOKIE_SESSION_OPTIONS);
            event.cookies.set(COOKIE_USER_REFRESH, data.login.refreshToken, COOKIE_PERSISTENT_OPTIONS);
        } catch (e) {
            throw error(HTTPCode.InternalServerError, Array.isArray(e) ? e[0]?.message : (e as Error)?.message ?? e?.toString());
        }

        throw redirect(HTTPCode.SeeOther, data.get("from")?.toString() ?? "/classes/main");
    }
};

export const load = (async ({cookies, url}) => {
    if (cookies.get(COOKIE_USER_SESSION) != null) {
        throw redirect(HTTPCode.NotModified, url.searchParams.get("from") ?? "/classes/main");
    }

    return {
        title: "auth/login",
        header: "Login"
    };
}) satisfies PageServerLoad;