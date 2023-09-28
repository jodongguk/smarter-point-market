<script>
    import {AppBar, AppShell, Toast} from "@skeletonlabs/skeleton";
    import ClassDrawer from "$lib/components/drawer/ClassDrawer.svelte";
    import { initializeStores } from '@skeletonlabs/skeleton';

    initializeStores();
</script>

<Toast />
<ClassDrawer />

<AppShell>
    <slot />
</AppShell>