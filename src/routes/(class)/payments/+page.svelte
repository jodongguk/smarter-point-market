<script lang="ts">
	import type { PageData } from './$types';
	import ResponsiveTable from "$lib/components/class/ResponsiveTable.svelte";

	let theadTitleList = ['클래스', '이름', '생년월일', '연락처', '수강등록일', '수업시작일', '납입일', '청구금액', ];

	export let data: PageData;
	let list: any[];
	$: list = data.list;
</script>

<svelte:head>
</svelte:head>

<div class="">
	<div class="flex justify-between">
		<h3 class="text-3xl font-medium text-gray-700">원비관리 </h3>
	</div>

	<div class="flex flex-wrap xl:space-x-4 mt-4">

		<ResponsiveTable theadList="{theadTitleList}" >
			{#each list as data, i}
				<tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b border-[#000000] block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[0]}</span>
						{data.classMaster.name}
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[1]}</span>
						{data.student.name}
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[2]}</span>
						{data.student.birthday}
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[3]}</span>
						{data.student.phone}
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[4]}</span>
						{data.student.dateEntered}
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[5]}</span>
						{data.student.classDateStart}
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[6]}</span>
						{data.dateToPay}
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{theadTitleList[7]}</span>
						{data.priceToPay}
					</td>
				</tr>
			{/each}
		</ResponsiveTable>

	</div>

</div>