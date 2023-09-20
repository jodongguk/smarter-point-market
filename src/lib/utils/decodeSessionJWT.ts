import type { SessionJWTData } from "$lib/typings/client/locals";

export const decodeSessionJWT = (token: string): SessionJWTData => {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("utf-8"));
};