<script lang="ts">
	import { goto } from '$app/navigation';
	import type {ExternalServiceError} from '$data/exception/ExternalServiceError';
	import type {InternalServiceError} from "$data/exception/InternalServiceError";
	import GymAuthService from '$data/services/auth/GymAuthService';

	let id: string;
	let password: string;

	async function handleLogin() {
		try {
			await GymAuthService.getToken({
				id,
				password
			});
			await goto('/dashboard');
		} catch (err: ExternalServiceError | InternalServiceError) {
			alert(err.message);
		}
	}
</script>

<svelte:head>
</svelte:head>

<div class="mt-12">
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

<!--<main class="flex flex-col items-center justify-center h-screen">
	<section class="flex flex-col items-center mb-20 text-5xl cursor-default">스마터 플러스 관리자</section>
	<section class="mb-40">
		<form
			class="flex flex-col text-gray-700 items-center"
			on:submit|preventDefault={onSubmit}
		>
			<div class="m-2">
				<label class="mr-2" for="id">
					<i class="fa fa-user text-xl" />
				</label>
				<input
					id="id"
					name="id"
					placeholder="아이디를 입력해주세요"
					type="text"
					class="text-xl p-2"
					bind:value={identification}
					required
				/>
			</div>
			<div class="m-2">
				<label class="mr-2" for="password">
					<i class="fa fa-lock text-xl" />
				</label>
				<input
					id="password"
					name="email"
					placeholder="&#8226&#8226&#8226&#8226"
					type="password"
					class="text-xl p-2"
					bind:value={password}
					required
				/>
			</div>
			<span
				class="text-red-400 ml-12 h-2 self-start text-sm"
			>
				{errorMessage ? errorMessage : ''}
			</span>
			<div class="mt-8">
				<button
					type="submit"
					class="text-primary whitespace-normal text-xl hover:text-primaryLight"
					>로그인</button
				>
			</div>
		</form>
	</section>
</main>-->
