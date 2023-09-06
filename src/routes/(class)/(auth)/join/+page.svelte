<script lang="ts">
	import {goto} from "$app/navigation";

	let identification: string;
	let password: string;
	let errorMessage: string;

	const onSubmit = async () => {

	};
</script>

<svelte:head>
</svelte:head>

<div class="mt-12">
	<form on:submit|preventDefault={onSubmit}>
		<div>
			<div class="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   required
				   type="email"
				   placeholder="User Email"
				   bind:value={identification} />
		</div>
		<div class="mt-4">
			<div class="text-sm font-bold text-gray-700 tracking-wide">Password</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   type="password"
				   placeholder="Password"
				   required
				   bind:value={password}/>
		</div>
		<div class="mt-4">
			<div class="text-sm font-bold text-gray-700 tracking-wide">Password Confirmation</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   type="password"
				   placeholder="Password"
				   required
				   bind:value={password}/>
		</div>
		<div class="mt-4">
			<div class="text-sm font-bold text-gray-700 tracking-wide">학원명</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   required
				   type="text"
				   placeholder="학원명"
				   bind:value={identification} />
		</div>
		<div class="mt-4">
			<div class="text-sm font-bold text-gray-700 tracking-wide">대표자명</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   required
				   type="text"
				   placeholder="대표자명"
				   bind:value={identification} />
		</div>
		<div class="mt-4">
			<div class="text-sm font-bold text-gray-700 tracking-wide">휴대폰 번호</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   required
				   type="text"
				   placeholder="휴대폰 번호"
				   bind:value={identification} />
		</div>
		<div class="mt-4">
			<div class="text-sm font-bold text-gray-700 tracking-wide">사업자 등록증 번호</div>
			<input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 border-0 border-b-1"
				   required
				   type="text"
				   placeholder="사업자 등록증 번호"
				   bind:value={identification} />
		</div>

		<div class="mt-10">
			<button type="submit" class="bg-indigo-600 text-white p-4 w-full rounded-lg tracking-wide font-semibold font-display">
				Sign up
			</button>
		</div>
	</form>
	<div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
		Already have an account? <a class="cursor-pointer text-indigo-600 hover:text-indigo-800" on:click={() => goto('/login')}>Sign in</a>
	</div>
</div>