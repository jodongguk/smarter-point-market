import {error, type Handle, LoadEvent} from "@sveltejs/kit";
import { setSession, UserRefreshStore } from "$houdini";
import { decodeSessionJWT } from "$lib/utils/decodeSessionJWT";
import {
    COOKIE_SESSION_OPTIONS,
    COOKIE_USER_REFRESH,
    COOKIE_USER_SESSION,
    HTTPCode
} from "$data/consts/Common";

/**
 * Refreshes a user's session token.
 *
 * @throws {@link error}
 */
const refreshToken = async (refreshToken: string, event): Promise<string> => {
    try {
        const tokenStore = new UserRefreshStore();
        const {data} = await tokenStore.mutate({ refreshToken }, {event});
        if (!data) throw Error("No refresh token found");
        return data.refresh.accessToken;
    } catch (e) {
        throw error(HTTPCode.InternalServerError, (e as Error).toString());
    }
};

export const handle: Handle = async ({ event, resolve }) => {
    const refresh = event.cookies.get(COOKIE_USER_REFRESH);
    let session = event.cookies.get(COOKIE_USER_SESSION);

    if (refresh && !session && !event.isDataRequest) {
        session = await refreshToken(refresh, event);
    }

    if (refresh && session) {
        const jwtData = decodeSessionJWT(session);

        // In case the cookie was not removed after the token expired.
        if (jwtData.exp < Date.now() / 1000) {
            session = await refreshToken(refresh, event);
            event.cookies.set(COOKIE_USER_SESSION, session, COOKIE_SESSION_OPTIONS);
        }
        setSession(event, { token: session });
        event.locals.user = {
            sub: jwtData.sub,
            auth: jwtData.auth
        };
    }

    return await resolve(event);
};