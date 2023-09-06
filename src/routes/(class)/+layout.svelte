<script lang="ts">
	import SideBar from '$lib/components/class/common/SideBar.svelte';
	import AppBar from "$lib/components/class/common/AppBar.svelte";
	import '@carbon/styles/css/styles.css' // may affect global styles
	import '@carbon/charts-svelte/styles.css'
	import type { PageData } from './$types';

	export let data: PageData;

	let user = data.me;

</script>

<style>

</style>

<div class="flex h-screen bg-gray-200">

	<SideBar {user} />

	<div class="flex-1 flex flex-col overflow-hidden">

		<AppBar {user}/>

		<main class="flex-1 overflow-x-hidden overflow-y-auto bg-smarterBodyBg">
			<div class="container mx-auto px-8 py-8">
				<slot />
			</div>
		</main>
	</div>
</div>