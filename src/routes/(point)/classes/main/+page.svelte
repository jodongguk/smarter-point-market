<script lang="ts">

import AuthLogo from "$lib/components/common/AuthLogo.svelte";
import GridLayout from "$lib/components/grid/GridLayout.svelte";
import GridButton from "$lib/components/grid/GridButton.svelte";
import {goto} from "$app/navigation";
</script>

<svelte:head>
</svelte:head>

<div class="flex flex-col px-12 mt-12">

	<AuthLogo />

	<GridLayout >

		<GridButton gradient="point-market-gradient1" title="예산 세우기" />
		<GridButton gradient="point-market-gradient2" title="칭찬스티커" />
		<GridButton gradient="point-market-gradient3" title="미션임파서블" />
		<GridButton gradient="point-market-gradient4" title="인증센터" />
		<GridButton gradient="point-market-gradient5" title="포인트랜드" on:click="{ () => goto('pointland') }"/>
		<GridButton gradient="point-market-gradient6" title="마이페이지" />

	</GridLayout>

</div>

