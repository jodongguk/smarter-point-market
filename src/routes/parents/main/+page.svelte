<script lang="ts">
import logo from "$lib/assets/images/parents_icon.svg";
import AuthLogo from "$lib/components/common/AuthLogo.svelte";
import GridLayout from "$lib/components/grid/GridLayout.svelte";
import GridButton from "$lib/components/grid/GridButton.svelte";
import {goto} from "$app/navigation";

import type { PageData } from './$types';

export let data: PageData;
</script>

<svelte:head>
</svelte:head>

<div class="flex flex-col px-12 mt-12">

	<AuthLogo {logo}/>

	<GridLayout >

		<GridButton gradient="point-market-gradient3" title="미션임파서블" addClass="col-span-2" on:click="{ () => goto('assignment') }"/>

		<GridButton gradient="point-market-gradient2" title="칭찬스티커" addClass="col-span-2" on:click="{ () => goto('badge') }"/>

		<GridButton gradient="point-market-gradient5" title="포인트랜드" addClass="col-span-2" on:click="{ () => goto('pointland') }"/>

	</GridLayout>

</div>

