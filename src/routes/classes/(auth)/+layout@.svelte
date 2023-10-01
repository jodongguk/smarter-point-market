<script>
    import {AppShell, getDrawerStore, initializeStores, Toast} from "@skeletonlabs/skeleton";
    import PageDrawer from "$lib/components/drawer/PageDrawer.svelte";

    initializeStores();
    const pageDrawerStore = getDrawerStore();
</script>


<Toast />
<PageDrawer {pageDrawerStore}/>
<AppShell>
    <slot />
</AppShell>