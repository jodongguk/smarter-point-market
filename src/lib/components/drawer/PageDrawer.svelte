<script lang="ts">
    import {Drawer, AppBar, AppShell} from '@skeletonlabs/skeleton';
    import ChevronLeft from "$lib/assets/images/chevron-left.svg";
    import BudgetWriter from "$lib/components/drawer/BudgetWriter.svelte";
    import AssignmentWrite from "$lib/components/drawer/AssignmentWrite.svelte";
    import MypageByParent from "$lib/components/drawer/MypageByParent.svelte";
    import MypageByClass from "$lib/components/drawer/MypageByClass.svelte";
    import type {DrawerStore} from "@skeletonlabs/skeleton/dist/utilities/Drawer/stores";

    export let pageDrawerStore: DrawerStore;
    export let userMe;

    const drawerClose = () => {
        pageDrawerStore.close();
    }

    $: pageDrawer = $pageDrawerStore.id;
</script>


<Drawer class={pageDrawer}>
    <AppShell>
        <svelte:fragment slot="header">
            <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
                <svelte:fragment slot="lead">
                    <button class="font-bold" on:click={drawerClose}><img class="align-middle inline mr-2" src="{ChevronLeft}" /> {$pageDrawerStore.meta.title}</button>
                </svelte:fragment>

                <svelte:fragment slot="trail">
                    <button class="font-bold" on:click={drawerClose}>취소</button>
                </svelte:fragment>
            </AppBar>
        </svelte:fragment>

        {#if pageDrawer === "budgetWriteDrawer"}
            <BudgetWriter {pageDrawerStore} />
        {/if}

        {#if pageDrawer === "assignmentWriteDrawer"}
            <AssignmentWrite {pageDrawerStore} />
        {/if}

        {#if pageDrawer === "mypageByClass"}
            <MypageByClass {pageDrawerStore} {userMe}/>
        {/if}

        {#if pageDrawer === "mypageByParent"}
            <MypageByParent {pageDrawerStore} {userMe}/>
        {/if}

        <svelte:fragment slot="pageFooter"></svelte:fragment>
    </AppShell>
</Drawer>