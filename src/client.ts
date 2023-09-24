import {HoudiniClient} from "$houdini";
import {error} from "@sveltejs/kit";

export default new HoudiniClient({
    url: import.meta.env.VITE_GRAPHQL_ENDPOINT,

    fetchParams({session, metadata, document}) {

        return {
            headers: {
                authorization: `Bearer ${session?.token}`,
            },
        };
    },
    throwOnError: {
        // can be any combination of
        // query, mutation, subscription, and all
        operations: ['all'],
        // the function to call
        error: (errors, ctx) =>
            error(
                500,
                `(${ctx.artifact.name}): ` + errors.map((err) => err.message).join('. ') + '.'
            ),
    },
})