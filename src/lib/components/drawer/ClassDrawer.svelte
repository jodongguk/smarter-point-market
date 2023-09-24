<script lang="ts">
    import {getDrawerStore, Drawer} from '@skeletonlabs/skeleton';

    const drawerStore = getDrawerStore();

    $: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
</script>


<Drawer class={classesDrawer}>
    <div class="w-full h-full flex justify-center items-center">
        <div class="text-center space-y-2">
            {#if $drawerStore.meta}<h2 class="h2">{$drawerStore.meta}</h2>{/if}
            <h4 class="h4">Drawer: <span class="capitalize">{$drawerStore.position}</span></h4>
            <span class="block">Tap outside the drawer to close.</span>
        </div>
    </div>
</Drawer>