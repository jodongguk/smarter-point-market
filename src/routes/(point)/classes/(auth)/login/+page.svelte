<script lang="ts">
	import { goto } from '$app/navigation';
	import ServiceLogo from '$lib/assets/images/smarter_logo.svg';
	import ParentsLogo from '$lib/assets/images/parents_icon.svg';

	let id: string;
	let password: string;

	async function handleLogin() {

	}
</script>

<svelte:head>
</svelte:head>

<div class="mt-12">
	<div class="flex flex-row">
		<div class="flex flex-col flex-initial">
			<img class="w-1/3" src="{ServiceLogo}"/>
			<div class="w-fit">
				<h2 class="text-point-market-purple1 text-5xl font-bold inline mr-1">Kids</h2>
				<h2 class="text-point-market-gray1 text-5xl font-bold inline mr-3">Point</h2>
			</div>
		</div>
		<div class="shrink ">
			<img class="w-1/5" src="{ParentsLogo}"/>
		</div>
	</div>

	<form on:submit|preventDefault={handleLogin}>
		<div>
			<div class="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   required
				   type="email"
				   placeholder="User Email"
				   bind:value={id} />
		</div>
		<div class="mt-8">
			<div class="flex justify-between items-center">
				<div class="text-sm font-bold text-gray-700 tracking-wide">
					Password
				</div>
				<div>
					<a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer" on:click={() => goto('/forgotPassword')}>
						Forgot Password?
					</a>
				</div>
			</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   type="password"
				   placeholder="Password"
				   required
				   bind:value={password}/>
		</div>
		<div class="mt-10 flex space-x-4">
			<button type="submit" class="bg-indigo-600 text-white p-4 w-full rounded-lg tracking-wide font-semibold font-display">
				Login
			</button>
			<button type="button" class="bg-white border border-indigo-600 text-gray-800 p-4 w-full rounded-lg tracking-wide font-semibold font-display" on:click={() => goto('/join')}>
				Sign up
			</button>
		</div>
	</form>
</div>