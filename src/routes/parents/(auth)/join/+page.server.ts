import {error, fail, redirect} from "@sveltejs/kit";
import type {Actions, PageServerLoad} from "./$types";
import {getMissingFields} from "$lib/utils/getMissingFields";
import {UserJoinStore} from "$houdini";
import {HTTPCode} from "$lib/constants";

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const dataFields = {
            userid: data.get("userid")?.toString(),
            password: data.get("password")?.toString(),
            name: data.get("name")?.toString(),
            phoneNumber: data.get("phoneNumber")?.toString()
        };

        const missing = getMissingFields(dataFields);
        if (missing.length > 0) return fail(HTTPCode.BadRequest, {missing});

        try {
            const userJoinStore = new UserJoinStore();
            const fields = dataFields as Record<keyof typeof dataFields, string>;
            const {data} = await userJoinStore.mutate(fields, {event});
            if (data == null) {
                throw Error("User Join returned a value of undefined.");
            }
        } catch (e) {
            throw error(HTTPCode.InternalServerError, Array.isArray(e) ? e[0]?.message : (e as Error)?.message ?? e?.toString());
        }

        throw redirect(HTTPCode.SeeOther, data.get("from")?.toString() ?? "/parents/main");
    }
};

export const load = (async ({cookies, url}) => {
    return {
        title: "auth/user/join",
        header: "User Join"
    };
}) satisfies PageServerLoad;