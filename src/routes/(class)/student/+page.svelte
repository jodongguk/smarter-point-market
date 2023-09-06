<script lang="ts">
	import type { PageData } from './$types';
	import {goto} from "$app/navigation";
	import StudentListCardItem from "$lib/components/class/StudentListCardItem.svelte";

	export let data: PageData;
	let list: any[];
	$: list = data.list;

</script>

<svelte:head>
</svelte:head>

<div class="">
	<div class="flex justify-between">
		<h3 class="text-3xl font-medium text-gray-700"> 원생정보 </h3>

		<a class="rounded-xl bg-smarterMain px-4 py-2 text-base font-medium text-white" on:click={() => {goto('/student/edit')}}>
			<i class="fa-solid fa-user-plus mr-2"></i> 원생 추가
		</a>
	</div>


	<div class="flex flex-wrap xl:space-x-4">
		{#each list as student}
			<StudentListCardItem {student} />
		{/each}
	</div>

</div>