/// <references types="houdini-svelte">

// TODO: change the api url based on the environment
/** @type {import('houdini').ConfigFile} */
const config = {
    watchSchema: {
        url: 'http://localhost:8080/graphql'
    },
    plugins: {
        "houdini-svelte": {}
    },
    scalars: {
    }
};

export default config;