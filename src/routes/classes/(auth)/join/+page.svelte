<script lang="ts">
	import { goto } from '$app/navigation';
	import CameraIcon from "$lib/assets/images/camera_icon.svg";
	import type {ExternalServiceError} from "$data/exception/ExternalServiceError";
	import type {InternalServiceError} from "$data/exception/InternalServiceError";
	import UserService from "$data/services/user/UserService";

	let userid: string;
	let password: string;
	let replyPassword: string;
	let name: string;
	let phoneNumber: string;

	async function handleJoin() {

		try {
			await UserService.join({
				userid,
				password,
				name,
				phoneNumber
			});
			await goto('login');
		} catch (err: ExternalServiceError | InternalServiceError) {
			alert(err.message);
		}
	}
</script>

<svelte:head>
</svelte:head>

<div class="flex flex-col h-full items-center px-10 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl bg-[#F9FBFF]">
	<form on:submit|preventDefault={handleJoin}>
		<div class="flex flex-col justify-between min-h-screen w-full">

			<div>
				<div class="flex flex-col items-center mt-5">
					<div class="relative">
						<img src="" class="border-none rounded-full w-24 h-24 bg-white drop-shadow-lg">
						<button class="absolute border-gray-300 border h-8 w-8 bg-white rounded-full bottom-0 right-0 ">
							<img class="w-4 h-4 mx-auto" src="{CameraIcon}" />
						</button>
					</div>
				</div>
				<div class="mt-5">
					<label class="text-point-market-gray1 font-semibold">아이디(이메일) <span class="text-point-market-purple1">*</span></label>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   required
						   type="email"
						   placeholder="아이디"
						   bind:value={userid} />
				</div>
				<div class="mt-3">
					<label class="text-point-market-gray1 font-semibold mb-1">비밀번호 <span class="text-point-market-purple1">*</span></label>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   type="password"
						   placeholder="비밀번호"
						   required
						   bind:value={password}/>
				</div>
				<div class="mt-3">
					<label class="text-point-market-gray1 font-semibold mb-1">비밀번호 확인 <span class="text-point-market-purple1">*</span></label>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   type="password"
						   placeholder="비밀번호 확인"
						   required
						   bind:value={replyPassword}/>
				</div>
				<div class="mt-3">
					<label class="text-point-market-gray1 font-semibold">이름 <span class="text-point-market-purple1">*</span></label>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   required
						   type="text"
						   placeholder="이름"
						   bind:value={name}/>
				</div>
				<div class="mt-3">
					<label class="text-point-market-gray1 font-semibold">휴대폰 번호 <span class="text-point-market-purple1">*</span></label>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   required
						   type="number"
						   placeholder="'-' 구분없이 입력"/>
				</div>


				<!--<div class="mt-3">
					<div class="flex flex-row space-x-2">
						<div class="">
							<label class="text-point-market-gray1 font-semibold">학원명 <span class="text-point-market-purple1">*</span></label>
							<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
								   required
								   type="text"
								   placeholder="학원명"/>
						</div>
						<div >
							<label class="text-point-market-gray1 font-semibold">대표자명 <span class="text-point-market-purple1">*</span></label>
							<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
								   required
								   type="text"
								   placeholder="대표자명"/>
						</div>
					</div>
				</div>
				<div class="mt-3">
					<label class="text-point-market-gray1 font-semibold">주소 <span class="text-point-market-purple1">*</span></label>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   required
						   type="text"
						   placeholder="주소"/>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   required
						   type="text"
						   placeholder="상세주소"/>
				</div>
				<div class="mt-3">
					<label class="text-point-market-gray1 font-semibold">사업자등록 번호 <span class="text-point-market-purple1">*</span></label>
					<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
						   required
						   type="number"
						   placeholder="'-' 구분없이 입력"/>
				</div>-->
			</div>

			<div class="mb-6">
				<button type="submit" class="bg-point-market-purple2 text-white py-3 w-full rounded-full tracking-wide font-bold font-display">
					가입하기
				</button>
			</div>
		</div>
	</form>

</div>