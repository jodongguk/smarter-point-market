<script lang="ts">

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

	<AuthLogo />

	<GridLayout >

		<GridButton gradient="point-market-gradient1" title="예산 세우기" addClass="col-span-2" on:click="{ () => goto('budget') }"/>
		<GridButton gradient="point-market-gradient3" title="미션임파서블" addClass="col-span-2" on:click="{ () => goto('assignment') }"/>
		<GridButton gradient="point-market-gradient4" title="인증센터" addClass="col-span-2" on:click="{ () => goto('confirm') }"/>
		<GridButton gradient="point-market-gradient5" title="포인트랜드" on:click="{ () => goto('pointland') }"/>
		<GridButton gradient="point-market-gradient2" title="칭찬스티커" on:click="{ () => goto('badge') }"/>

	</GridLayout>

</div>

