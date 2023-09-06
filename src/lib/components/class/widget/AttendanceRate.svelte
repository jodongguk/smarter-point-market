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
		<h2 class="text-lg font-medium text-gray-700">출석율(어제)</h2>
		<div class="mt-4">
			<h4 class="text-2xl font-semibold text-gray-700"> 100%</h4>
			<div class="text-sm text-blue-500 font-semibold"> 목표 100%</div>
		</div>
	</div>
	<div class="">
		<GaugeChart {data} {options} />
	</div>
</div>