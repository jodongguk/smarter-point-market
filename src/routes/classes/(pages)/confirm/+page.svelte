<script lang="ts">
    import type { PageData } from './$types';
    import {formatNumberCommaText} from "$lib/utils/FormatData";
    import {changeSearchParam} from "$lib/utils/changeSearchParam";
    import {get} from "svelte/store";
    import {userSelectChildren} from "$lib/stores";
    import AssignmentSerivce from "$data/service/AssignmentSerivce";
    import {invalidateAll} from "$app/navigation";

    export let data: PageData;

    $: selectChildren = get(userSelectChildren);
    $: assignmentList = data.assignmentList;
    $: assignmentId = data.assignmentId;
    $: submitList = data.submitList;
    $: selectSubmit = [];

    const changeIdHandler = (id) => {
        assignmentId = id;
        changeSearchParam({ value: id, param: 'assignmentId' })
    };

    const onSuccessHandler = (async () => {
        AssignmentSerivce.submitSuccess({
            list: selectSubmit.map(id => {return {id}})
        });
        await invalidateAll();
    });

    const onRejectHandler = (async () => {
        AssignmentSerivce.submitReject({
            list: selectSubmit.map(id => {return {id}})
        });
        await invalidateAll();
    });
</script>

<svelte:head>
</svelte:head>

<div class="relative overflow-auto mt-6">
    <div class="relative w-full flex gap-2 snap-x scroll-pl-6 scroll-pr-6 overflow-x-auto ">
        {#each assignmentList as assignment}
            <div class="snap-start shrink-0 first:pl-6 last:pr-6">
                <button class="flex flex-col items-center rounded-2xl bg-point-market-purple3 w-36 p-2"
                        on:click={changeIdHandler(assignment.id)}
                        class:opacity-30={assignment.id !== assignmentId}
                        value="{assignment.id}">
                    <p class="text-white font-bold ">{assignment.title}</p>
                    <p class="text-white font-bold ">{formatNumberCommaText(assignment.rewardCredit)}P</p>
                </button>
            </div>
        {/each}
    </div>
</div>

<div class="flex flex-wrap justify-center space-x-2">
    <button type="button" class="btn bg-point-market-purple4 w-1/3 text-white p-3.5 rounded-full tracking-wide font-bold font-display mt-2" on:click={onSuccessHandler}>인증하기</button>
    <button type="button" class="btn bg-point-market-purple5 w-1/3 text-white p-3.5 rounded-full tracking-wide font-bold font-display mt-2" on:click={onRejectHandler}>반려하기</button>
</div>

<div class="p-4">
    {#each submitList as submit}
        <div>
            <h6 class="text-lg font-bold text-point-market-purple1">{submit.assignment?.title}</h6>
            <div class="flex justify-between">
                <h6 class="text-md font-bold text-gray-600">{submit.account?.name}</h6>
                <span class="text-sm font-normal">{submit.createdAt}</span>
            </div>
        </div>
        <label class="card mt-4 shadow-lg rounded-2xl overflow-hidden mb-2 p-4 flex space-x-2">
            <input class="checkbox" type="checkbox" bind:group={selectSubmit} value="{submit.id}"/>
            <section class="">
                <article class="inset-0 w-full">
                    <img src="https://unsplash.it/400/200">
                </article>
                <p class="font-bold p-4 text-lg" >{submit.comment}</p>
            </section>
        </label>
    {/each}
    {#if submitList.length === 0}
        <div class="card mt-4 shadow-lg rounded-2xl overflow-hidden mb-2">
            <p class="p-4 w-full text-center text-lg font-bold text-point-market-purple1">제출한 미션이 없습니다.</p>
        </div>
    {/if}
</div>