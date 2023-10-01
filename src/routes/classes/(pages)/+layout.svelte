<script lang="ts">
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
    import {
        AppBar,
        AppShell,
        Toast,
        storePopup,
        type PopupSettings,
        type DrawerSettings,
        getDrawerStore
    } from "@skeletonlabs/skeleton";
    import ServiceHeaderLogo from "$lib/assets/images/smarter_logo_header.svg";
    import PageDrawer from "$lib/components/drawer/PageDrawer.svelte";
    import { initializeStores } from '@skeletonlabs/skeleton';
    import {goto} from "$app/navigation";
    import {userSelectInstitute} from "$lib/stores";
    import {get} from "svelte/store";
    import Icon from 'svelte-icons-pack/Icon.svelte'
    import VscThreeBars from "svelte-icons-pack/vsc/VscThreeBars";
    import FaBell from "svelte-icons-pack/fa/FaBell";

    export let data: PageData;

    $: userMe = data.userMe;
    $: selectInstitute = get(userSelectInstitute);
    $: pathname = $page.url.pathname;
    $: checkMenuActive = (path: string) => pathname.includes(path);
    $: checkMenuActiveClass = (path: string) => checkMenuActive(path)? "text-black border-b-4 border-point-market-purple1" : "text-slate-500";

    if(get(userSelectInstitute)) {
        userSelectInstitute.set(data.userMe?.institutes[0])
    }

    const gotoMain = () => {
        goto('main');
    }


    initializeStores();

    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
    const popupCombobox: PopupSettings = {
        event: 'focus-click',
        target: 'popupCombobox',
        placement: 'bottom',
        closeQuery: '.listbox-item'
    };

    const pageDrawerStore = getDrawerStore();
    const mypageByClass = () => {
        const settings: DrawerSettings = {
            id: 'mypageByClass',
            position: 'left',
            width: 'w-full',
            meta: {
                title: "마이페이지"
            }
        };
        pageDrawerStore.open(settings);
    }
</script>

<Toast />
<PageDrawer {pageDrawerStore} {userMe}/>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
            <svelte:fragment slot="lead">
                <button type="button" on:click={mypageByClass}>
                    <Icon src="{VscThreeBars}" size="1.5em"/>
                </button>
            </svelte:fragment>
            <button on:click={gotoMain}><img class="" src="{ServiceHeaderLogo}"/></button>
            <svelte:fragment slot="trail">
                <button>
                    <Icon src="{FaBell}" size="1.5em"/>
                </button>
            </svelte:fragment>
        </AppBar>
        <div class="flex">
            <button class="flex-1 py-2 font-semibold {checkMenuActiveClass('budget')}" on:click="{ () => goto('budget') }">예산설정</button>
            <button class="flex-1 py-2 font-semibold {checkMenuActiveClass('assignment')}" on:click="{ () => goto('assignment') }">미션임파서블</button>
            <button class="flex-1 py-2 font-semibold {checkMenuActiveClass('confirm')}"on:click="{ () => goto('confirm') }">인증센터</button>
        </div>
        <hr class="opacity-50 !border-black" />
    </svelte:fragment>

    <svelte:fragment slot="pageHeader"></svelte:fragment>

    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->

    <svelte:fragment slot="pageFooter"></svelte:fragment>

    <svelte:fragment slot="footer">
    </svelte:fragment>
</AppShell>