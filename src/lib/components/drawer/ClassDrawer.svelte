<script lang="ts">
    import {getDrawerStore, Drawer, AppBar, AppShell} from '@skeletonlabs/skeleton';
    import ChevronLeft from "$lib/assets/images/chevron-left.svg";
    import AlertIcon from "$lib/assets/images/alert_icon.svg";
    import BudgetWriter from "$lib/components/drawer/BudgetWriter.svelte";
    import AssignmentDrawer from "$lib/components/drawer/AssignmentWriteDrawer.svelte";

    const drawerStore = getDrawerStore();

    const drawerClose = () => {
        drawerStore.close();
    }

    $: classesDrawer = $drawerStore.id;
</script>


<Drawer class={classesDrawer}>
    <AppShell>
        <svelte:fragment slot="header">
            <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
                <svelte:fragment slot="lead">
                    <button class="font-bold" on:click={drawerClose}><img class="align-middle inline mr-2" src="{ChevronLeft}" /> {$drawerStore.meta.title}</button>
                </svelte:fragment>

                <svelte:fragment slot="trail">
                    <button class="font-bold" on:click={drawerClose}>취소</button>
                </svelte:fragment>
            </AppBar>
        </svelte:fragment>

        {#if classesDrawer === "budgetWriteDrawer"}
            <BudgetWriter {drawerStore} />
        {/if}

        {#if classesDrawer === "assignmentWriteDrawer"}
            <AssignmentDrawer {drawerStore} />
        {/if}

        <svelte:fragment slot="pageFooter"></svelte:fragment>
    </AppShell>
</Drawer>