<script lang="ts">
    import type { PageData } from './$types';
    import {type DrawerSettings, getDrawerStore} from "@skeletonlabs/skeleton";
    import {formatNumberCommaText} from "$lib/utils/FormatData";

    export let data: PageData;

    $: assignmentList = data.list;

    const drawerStore = getDrawerStore();

    const assignmentWriteDrawer = () => {
        const settings: DrawerSettings = {
            id: 'assignmentWriteDrawer',
            position: 'left',
            width: 'w-full',
            meta: {
                title: "미션 등록"
            }
        };
        drawerStore.open(settings);
    }
</script>

<svelte:head>
</svelte:head>

<div class="flex flex-col p-4 ">

    <button class="bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display" on:click={assignmentWriteDrawer}>
        + 신규미션등록
    </button>

    <div class="flex flex-wrap w-full mt-8">
        {#each assignmentList as assignment}
        <div class="w-1/2 p-4">
            <button type="button" class="bg-point-market-purple2 w-full px-2 py-2 rounded-lg font-bold text-white">
                {assignment.title}
                <span class="font-bold text-white block">{formatNumberCommaText(assignment.rewardCredit)}P</span>
            </button>
        </div>
        {/each}
    </div>
</div>