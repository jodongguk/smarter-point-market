import type {RequestEvent} from "@sveltejs/kit";
import {UserJoinStore, UserLoginStore} from "$houdini";
import type {InputInstitute, UserLogin$result} from "$houdini";
import {
    COOKIE_PERSISTENT_OPTIONS,
    COOKIE_SESSION_OPTIONS,
    COOKIE_USER_REFRESH,
    COOKIE_USER_SESSION
} from "$lib/constants";
import {list} from "postcss";


export default class UserService {
    static async userLogin(variables: {
        userid: string,
        password: string;
    }, event: RequestEvent) {

        const userLoginStore = new UserLoginStore();

        const dataFields = variables;
        const fields = dataFields as Record<keyof typeof dataFields, string>;

        const {data} = await userLoginStore.mutate(fields, {event}) as {data: UserLogin$result};

        event.cookies.set(COOKIE_USER_SESSION, data.login.accessToken, COOKIE_SESSION_OPTIONS);
        event.cookies.set(COOKIE_USER_REFRESH, data.login.refreshToken, COOKIE_PERSISTENT_OPTIONS);

        return data?.login;
    }

    static async userJoin(variables: {
        userid: String
        password: String
        name: String
        phoneNumber: String
        birthDate: Number
        institutes: [InputInstitute]
    }, event: RequestEvent) {

        const userJoinStore = new UserJoinStore();

        const dataFields = variables;
        const fields = dataFields as Record<keyof typeof dataFields, any>;

        const {data} = await userJoinStore.mutate(fields, {event});

        return data?.join
    }
}