<script lang="ts">
    import type { PageData } from './$types';
    import CameraIcon from "$lib/assets/images/camera_icon.svg";
    import {formatNumberCommaText} from "$lib/utils/FormatData";
    import {changeSearchParam} from "$lib/utils/changeSearchParam";
    import {AssignmentSubmitSaveStore} from "$houdini";
    import {get} from "svelte/store";
    import {userSelectChildren} from "$lib/stores";

    export let data: PageData;

    $: selectChildren = get(userSelectChildren);
    $: assignmentList = data.assignmentList;
    $: assignmentId = data.assignmentId;
    $: assignment = data.assignment;

    let comment: String;

    const changeIdHandler = (id) => {
        assignmentId = id;
        changeSearchParam({ value: id, param: 'assignmentId' })
    }
    const onSubmit = () => {
        const assignmentSubmitSaveStore = new AssignmentSubmitSaveStore();
        assignmentSubmitSaveStore.mutate({
            assignmentId: assignmentId,
            accountId: selectChildren.id,
            comment: comment
        })
    }
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


<div class="p-4">
    <div class="card mt-4 shadow-lg rounded-2xl overflow-hidden mb-2">
        <section class="">
            <article class="relative inset-0 w-full text-white ">
                <img width="w-full object-cover object-center opacity-60" src="https://unsplash.it/400/400">
                <label class="absolute top-0 w-full">
                    <h3 class="font-bold p-4 text-4xl" data-toc-ignore="">{assignment.title}</h3>
                </label>
                <p class="absolute bottom-0 text-center w-full p-4 text-point-market-purple1 font-bold text-4xl">+{assignment.rewardCredit}P</p>
            </article>
        </section>
        <footer class="flex justify-center bg-point-market-purple1 rounded-b-2xl p-2">
            <button type="button" class="bg-white rounded-full p-2">
                <img class="" src="{CameraIcon}" />
            </button>
        </footer>
    </div>


    <input type="text" class="w-full text-lg rounded-lg px-4 py-3 border border-gray-400 focus:outline-point-market-purple1" bind:value={comment}/>
    <button type="button" class="btn w-full bg-point-market-purple2 text-white p-3.5 rounded-lg tracking-wide font-bold font-display mt-2" on:click={onSubmit}>확인</button>
</div>


