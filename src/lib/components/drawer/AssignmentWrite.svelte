<script lang="ts">
    import {Step, Stepper} from "@skeletonlabs/skeleton";
    import {formatNumberCommaText} from "$lib/utils/FormatData";
    import {AssignmentSaveStore} from "$houdini"
    import type {DrawerStore} from "@skeletonlabs/skeleton/dist/utilities/Drawer/stores";
    import {get} from "svelte/store";
    import {userSelectInstitute} from "$lib/stores";
    import {invalidateAll} from "$app/navigation";

    export let pageDrawerStore: DrawerStore;

    $: selectInstitute = get(userSelectInstitute);

    let title;
    let startDate;
    let endDate;
    let rewardCredit;

    const changedCredit = (credit: Number) => {
        rewardCredit = credit;
    }

    const onNextHandler = (e: Event) => {
        console.log(e)
        return false;
    }

    const onStepHandler = (e: Event) => {
        console.log(e)
    }
    const onCompleteHandler = async (e: Event): void => {
        const assignmentSaveStore = new AssignmentSaveStore();
        await assignmentSaveStore.mutate({
            institueId: selectInstitute.id,
            title: title,
            startDate: startDate,
            endDate: endDate,
            rewardCredit: rewardCredit
        });
        pageDrawerStore.close();
        await invalidateAll();
    }
</script>


<div class="p-8">

    <Stepper buttonBack="bg-white border border-[#DDDDDD] text-[#434343] p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonBackLabel="뒤로"
             buttonNext="bg-white border border-[#DDDDDD] text-[#434343] p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonNextLabel="다음"
             buttonComplete="bg-point-market-purple2 text-white p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonCompleteLabel="등록하기"
             on:next={onNextHandler}
             on:step={onStepHandler}
             on:complete={onCompleteHandler}>
        <Step>
            <svelte:fragment slot="header"></svelte:fragment>
            <div class="bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display">
                <input type="text" class="w-full h-12 px-4 text-3xl font-medium rounded-lg font-black text-right text-black"
                       bind:value={title}
                       placeholder="미션제목"/>
            </div>
            <div class="bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display">
                <input type="number" class="w-full h-12 px-4 text-3xl font-medium rounded-lg font-black text-right text-black"
                       bind:value={rewardCredit}
                       placeholder="1,000"/>
            </div>

            <div class="flex flex-wrap">
                {#each {length: 5} as _, i}
                    <div class="w-1/5 mb-2">
                        <button type="button" class="border rounded-lg p-1 whitespace-nowrap text-point-market-gray1" on:click={() => changedCredit((i+1) * 500)}>{(i+1) * 500} P</button>
                    </div>
                {/each}
            </div>

            <div class="flex space-x-4 bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display ">
                <input type="date" class="w-full h-12 px-4 text-sm font-medium rounded-lg font-black text-center text-black" bind:value={startDate} placeholder=""/>
                <input type="date" class="w-full h-12 px-4 text-sm font-medium rounded-lg font-black text-center text-black" bind:value={endDate} placeholder=""/>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header"></svelte:fragment>

            <div class="p-4 bg-gray-100 shadow-lg border rounded-lg">
                {#if startDate || endDate}
                    <p class="text-point-market-purple1 text-center font-semibold mb-4">{startDate} ~ {endDate}</p>
                {/if}

                <p class="text-point-market-purple1 text-center text-2xl font-bold">{title}</p>
            </div>

            <hr class="h-px bg-gray-600 border-0 block" />

            <dl class="flex-wrap flex ">
                <dt class="w-1/2 mb-2 text-center">수행 포인트</dt>
                <dd class="w-1/2 mb-2 text-right">{formatNumberCommaText(rewardCredit)} P</dd>
            </dl>

        </Step>
    </Stepper>
</div>