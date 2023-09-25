<script>
    import {AppBar, AppShell, Toast} from "@skeletonlabs/skeleton";
    import ServiceHeaderLogo from "$lib/assets/images/smarter_logo_header.svg";
    import AlertIcon from "$lib/assets/images/alert_icon.svg";
    import ClassDrawer from "$lib/components/drawer/ClassDrawer.svelte";
    import { initializeStores } from '@skeletonlabs/skeleton';
    import {goto} from "$app/navigation";

    const gotoMain = () => {
        goto('main');
    }

    initializeStores();
</script>

<Toast />
<ClassDrawer />

<AppShell>
    <svelte:fragment slot="header">
        <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
            <svelte:fragment slot="lead">
                <p></p>
            </svelte:fragment>
            <button on:click={gotoMain}><img class="" src="{ServiceHeaderLogo}"/></button>
            <svelte:fragment slot="trail">
                <button>
                    <img class="w-3/5" src="{AlertIcon}" />
                </button>
            </svelte:fragment>
        </AppBar>
        <div class="flex ">
            <button class="flex-1 py-2 font-semibold text-black border-b-4 border-point-market-purple1">예산설정</button>
            <button class="flex-1 py-2 font-semibold text-slate-500">미션임파서블</button>
            <button class="flex-1 py-2 font-semibold text-slate-500">인증센터</button>
        </div>
        <hr class="opacity-50" />
    </svelte:fragment>

    <svelte:fragment slot="pageHeader">

    </svelte:fragment>

    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->

    <svelte:fragment slot="pageFooter">

    </svelte:fragment>

    <svelte:fragment slot="footer">

    </svelte:fragment>
</AppShell>