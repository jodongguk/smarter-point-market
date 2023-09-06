<script lang="ts">
	$: {

	}
</script>

<svelte:head>
</svelte:head>

<div class="">
	<div class="flex justify-between">
		<h3 class="text-3xl font-medium text-gray-700">출결관리 </h3>

	</div>

	<div class="flex flex-wrap xl:space-x-4 mt-4">

		<table class="border-collapse w-full rounded-lg border border-gray-200 shadow-md">
			<thead class="bg-gray-50">
				<tr>
					<th class="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">클래스</th>
					<th class="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">이름</th>
					<th class="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">주보호자명</th>
					<th class="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">연락처</th>
					<th class="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">출석시간</th>
					<th class="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">사유</th>
				</tr>
			</thead>
			<tbody>
				<tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">클래스</span>
						클래스
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">이름</span>
						이름
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">주보호자명</span>
						주보호자명
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">연락처</span>
						연락처
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">연락처</span>
						연락처
					</td>
					<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
						<span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">사유</span>
						<span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">사유</span>
					</td>
				</tr>

			</tbody>
		</table>

	</div>

</div>