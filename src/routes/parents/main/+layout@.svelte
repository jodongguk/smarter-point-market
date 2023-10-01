<script>
    import {AppBar, AppShell, getDrawerStore, Toast} from "@skeletonlabs/skeleton";
    import PageDrawer from "$lib/components/drawer/PageDrawer.svelte";
    import { initializeStores } from '@skeletonlabs/skeleton';

    initializeStores();

    const pageDrawerStore = getDrawerStore();
</script>

<Toast />
<PageDrawer {pageDrawerStore}/>

<AppShell>
    <slot />
</AppShell>