import {error, fail, redirect} from "@sveltejs/kit";
import type {Actions, PageServerLoad} from "./$types";
import {getMissingFields} from "$lib/utils/getMissingFields";
import {
    COOKIE_SESSION_OPTIONS,
    COOKIE_PERSISTENT_OPTIONS,
    COOKIE_USER_REFRESH,
    COOKIE_USER_SESSION,
    HTTPCode
} from "$lib/constants";
import UserService from "$data/service/UserService";

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const dataFields = {
            userid: data.get("userid")?.toString(),
            password: data.get("password")?.toString(),
            role: "parent"
        };

        const missing = getMissingFields(dataFields);
        if (missing.length > 0) return fail(HTTPCode.BadRequest, {missing});

        try {
            await UserService.userLogin({userid: dataFields.userid, password: dataFields.password}, event);
        } catch (e) {
            return fail(HTTPCode.InternalServerError, Array.isArray(e) ? e[0]?.message : (e as Error)?.message ?? e?.toString());
        }

        throw redirect(HTTPCode.SeeOther, data.get("from")?.toString() ?? "/parents/main");
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