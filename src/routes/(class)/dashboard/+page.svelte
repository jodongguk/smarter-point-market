<script lang="ts">
import TotalHeadCount from "$lib/components/class/widget/TotalHeadCount.svelte";
import NewHeadCount from "$lib/components/class/widget/NewHeadCount.svelte";
import AttendanceRate from "$lib/components/class/widget/AttendanceRate.svelte";
import StatisticsChart from "$lib/components/class/widget/StatisticsChart.svelte";
import MonthlySales from "$lib/components/class/widget/MonthlySales.svelte";
import TotalSales from "$lib/components/class/widget/TotalSales.svelte";
import PaymentRate from "$lib/components/class/widget/PaymentRate.svelte";

</script>

<svelte:head>
</svelte:head>

<div class="">
	<h3 class="text-3xl font-medium text-gray-700"> Dashboard </h3>

	<div class="flex mt-4 xl:justify-between space-y-4 md:space-y-0 xl:space-y-0 md:space-x-4 xl:space-x-4 flex-wrap md:flex-nowrap">
		<div class="w-full sm:w-1/2 xl:w-1/3 xl:mt-0">
			<TotalHeadCount />
		</div>
		<div class="w-full sm:w-1/2 xl:w-1/3 ">
			<NewHeadCount />
		</div>
		<div class="w-full sm:w-1/2 xl:w-1/3">
			<AttendanceRate />
		</div>
	</div>

	<div class="flex flex-col mt-8">
		<div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
			<StatisticsChart />
		</div>
	</div>

	<div class="flex mt-4 xl:justify-between space-y-4 md:space-y-0 xl:space-y-0 md:space-x-4 xl:space-x-4 flex-wrap md:flex-nowrap">
		<div class="w-full sm:w-1/2 xl:w-1/3 xl:mt-0">
			<TotalSales />
		</div>
		<div class="w-full sm:w-1/2 xl:w-1/3 ">
			<MonthlySales />
		</div>
		<div class="w-full sm:w-1/2 xl:w-1/3">
			<PaymentRate />
		</div>
	</div>

</div>