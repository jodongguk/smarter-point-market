import {HoudiniClient} from "$houdini";

export default new HoudiniClient({
    url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    fetchParams({session, metadata, document}) {
        return {
            headers: {
                authorization: `Bearer ${session.token}`,
            },
        };
    },
})