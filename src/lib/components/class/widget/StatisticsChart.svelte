<script>
import {AreaChart} from "@carbon/charts-svelte";

let data = [
	{
		"group": "Dataset 1",
		"date": 1558453260000,
		"value": 2
	},
	{
		"group": "Dataset 1",
		"date": 1558453320000,
		"value": 3
	},
	{
		"group": "Dataset 1",
		"date": 1558453380000,
		"value": 5
	},
]
let options = {
	"height": "300px",
	"grid": {
		"x": {
			"enabled": true
		},
		"y": {
			"enabled": true
		}
	},
	"axes": {
		"bottom": {
			"visible": true,
			"mapsTo": "date",
			"scaleType": "time"
		},
		"left": {
			"visible": true,
			"mapsTo": "value",
			"scaleType": "linear"
		}
	},
	"color": {
		"gradient": {
			"enabled": true
		}
	},
	"points": {
		"enabled": false
	},
	"legend": {
		"enabled": false
	},
	toolbar : {
		enabled : false
	},
}
</script>

<div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg bg-white p-8">
	<div class="mb-4">
		<h1 class="text-xl">Statistics</h1>
	</div>
	<AreaChart {data} {options} />
</div>