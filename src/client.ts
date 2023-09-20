import {HoudiniClient, type RequestHandler} from "$houdini";

const requestHandler: RequestHandler = async ({fetch, text = "", variables = {}, session}) => {
    const url = import.meta.env.VITE_GRAPHQL_ENDPOINT;

    const headers = new Headers({"Content-Type": "application/json"});
    if (session?.token) {
        headers.append("Authorization", `Bearer ${session.token}`);
    }

    const result = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            query: text,
            variables
        })
    });

    return await result.json();
};

export default new HoudiniClient(requestHandler);