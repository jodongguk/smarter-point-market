<script>
import {GaugeChart} from "@carbon/charts-svelte";

let data = [
	{
		group : "value",
		value : 42,
	},
	{
		group : "delta",
		value : -13.37,
	}
]
let options = {
	//title : "Gauge semicircular -- danger status",
	resizable : true,
	height : "150px",
	width : "auto",
	gauge: {
		alignment : "center",
		type : "semi",
		status : "danger",
	},
	toolbar : {
		enabled : false
	},
}
</script>

<div class="flex xl:justify-between flex-wrap md:flex-nowrap px-5 py-6 bg-white rounded-md shadow-sm">
	<div class="flex flex-col">
		<h2 class="text-lg font-medium text-gray-700">총매출액</h2>
		<div class="mt-4">
			<h4 class="text-2xl font-semibold text-gray-700"> 79,000,000원</h4>
			<div class="text-sm text-red-600 font-semibold"> 목표 90,000,000원</div>
		</div>
	</div>
	<div class="">
		<GaugeChart {data} {options} />
	</div>
</div>
